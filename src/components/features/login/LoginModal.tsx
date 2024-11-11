import { useState, useEffect } from "react";
import {
  Overlay,
  StyledLoginModal,
  Title,
  CloseButton,
  InputWrapper,
  ButtonContainer,
} from "./LoginModal.styles";
import Input from "./Input";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import { StyledButton } from "../../common/button/Button.styles";
import { useValidation } from "../../../hooks/useValidation";
import useAuthStore from "../../../store/useAuthStore";
import useAuthApi from "../../../hooks/useAuthApi";
import useLoadingStore from "../../../store/useLoadingStore";

import { toast } from "react-toastify";

interface LoginModalProps {
  onClose: () => void;
  onToggleView: () => void;
  onLoginSuccess: () => void; // 로그인 성공 시 호출할 함수
}

const LoginModal = ({
  onClose,
  onToggleView,
  onLoginSuccess,
}: LoginModalProps) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { validation, validateForm, handleFieldChange } = useValidation();
  const { login } = useAuthApi(); // useAuthApi 훅 사용
  const setEmailInStore = useAuthStore((state) => state.setEmail);
  const { isLoading, setLoading } = useLoadingStore();

  useEffect(() => {
    // 모달이 열릴 때 스크롤 금지
    document.body.style.overflow = "hidden";
    return () => {
      // 모달이 닫힐 때 스크롤 허용
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    handleFieldChange(name, value);
  };

  const handleSubmit = async () => {
    const toastId = "loginToast"; // 고유 ID 설정

    if (validateForm(formData)) {
      setLoading(true);
      try {
        await login(formData.email, formData.password); // 로그인 메서드 호출
        setEmailInStore(formData.email);
        onLoginSuccess(); // 로그인 성공 시 호출하여 isLogin 상태 업데이트
        onClose(); // 로그인 성공 후 모달 닫기

        // 동일한 위치의 토스트 메시지를 재생성
        toast.success("로그인 성공", {
          toastId,
          autoClose: 1000,
        });
      } catch (error) {
        console.error("이메일 또는 비밀번호를 확인해주세요!:", error);
        toast.error("이메일 또는 비밀번호를 확인해주세요!", {
          toastId,
          autoClose: 1000,
        });
      } finally {
        setLoading(false); // 로그인 성공 및 실패 시 로딩 종료
      }
    } else {
      toast.error("입력 정보를 다시 확인해주세요.", {
        toastId,
        autoClose: 1000,
      });
      setLoading(false); // 유효하지 않은 정보일 경우 로딩 종료
    }
  };

  return (
    <Overlay>
      <StyledLoginModal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} />
        <Title>Meetify</Title>
        {isLoading && <LoadingSpinner />}
        <InputWrapper>
          <Input
            type="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
            name="email"
            hasError={!validation.email.isValid}
            errorMessage={
              !validation.email.isValid ? validation.email.message : ""
            }
          />
          <Input
            type="password"
            placeholder="비밀번호"
            iconType="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            hasError={!validation.password.isValid}
            errorMessage={
              !validation.password.isValid ? validation.password.message : ""
            }
          />
        </InputWrapper>
        <ButtonContainer>
          <StyledButton
            $buttonType="fill"
            $buttonSize="large"
            onClick={handleSubmit}
          >
            로그인
          </StyledButton>
          <StyledButton
            $buttonType="outline"
            $buttonSize="large"
            onClick={onToggleView}
          >
            회원가입
          </StyledButton>
        </ButtonContainer>
      </StyledLoginModal>
    </Overlay>
  );
};

export default LoginModal;
