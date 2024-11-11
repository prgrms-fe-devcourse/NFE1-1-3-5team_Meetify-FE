import axios from "axios";
import { useState } from "react";
import useAuthStore from "../store/useAuthStore";

const VITE_API_URL = import.meta.env.VITE_API_URL;

interface ValidationState {
  isValid: boolean;
  message: string;
}

interface UseAuthApiReturn {
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    nickname: string,
    password: string
  ) => Promise<void>;
  deleteUser: (email: string) => Promise<void>;
  validation: Record<string, ValidationState>;
}

const useAuthApi = (): UseAuthApiReturn => {
  const [validation, setValidation] = useState<Record<string, ValidationState>>(
    {
      email: { isValid: true, message: "" },
      password: { isValid: true, message: "" },
      nickname: { isValid: true, message: "" },
    }
  );

  // Zustand 훅을 사용하여 상태를 업데이트하는 메서드 가져오기
  const setIsLogin = useAuthStore((state) => state.setIsLogin);
  const setEmail = useAuthStore((state) => state.setEmail);
  const setNickname = useAuthStore((state) => state.setNickname);
  const setProfileImageIndex = useAuthStore(
    (state) => state.setProfileImageIndex
  );
  const setShowProfileProposal = useAuthStore(
    (state) => state.setShowProfileProposal
  );

  const login = async (email: string, password: string) => {
    try {
      // 로그인 API 호출
      const response = await axios.post(`${VITE_API_URL}/auth/login`, {
        email,
        password,
      });
      console.log("로그인 성공:", response.data);
      setIsLogin(true); // 로그인 성공 시 isLogin 상태 업데이트
      setEmail(email); // 로그인 성공 시 이메일 상태 업데이트
      setNickname(response.data.nickname); // 로그인 성공 시 닉네임 상태 업데이트
      setProfileImageIndex(response.data.profile_image_index); // 로그인 성공 시 프로필 이미지 인덱스 상태 업데이트

      console.log("닉네임:", response.data.nickname);
      console.log("프로필 이미지 인덱스:", response.data.profile_image_index);

      // JWT 토큰을 로컬 스토리지에 저장
      localStorage.setItem("token", response.data.token);

      if (response.data.is_first_login) {
        setShowProfileProposal(true); // 첫 로그인 시 ProfileProposal 모달 표시
      } else {
        setShowProfileProposal(false); // 첫 로그인이 아닐 경우 모달 표시 안 함
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      setValidation((prev) => ({
        ...prev,
        email: {
          isValid: false,
          message: "로그인 실패: 이메일 또는 비밀번호가 잘못되었습니다.",
        },
      }));
      throw error;
    }
  };

  const register = async (
    email: string,
    nickname: string,
    password: string
  ) => {
    try {
      // 회원가입 API 호출
      console.log("api: ", `${VITE_API_URL}/auth/register`);
      const response = await axios.post(`${VITE_API_URL}/auth/register`, {
        email,
        nickname,
        password,
      });
      console.log("회원가입 성공:", response.data);
    } catch (error) {
      console.error("회원가입 실패:", error);
      // 회원가입 실패 시 유효성 검사 상태 업데이트
      setValidation((prev) => ({
        ...prev,
        email: {
          isValid: false,
          message: "회원가입 실패: 이메일 또는 닉네임이 이미 사용 중입니다.",
        },
      }));
      throw error;
    }
  };

  const deleteUser = async (email: string) => {
    try {
      const response = await axios.delete(`${VITE_API_URL}/auth/${email}`);
      localStorage.removeItem("token");
      console.log("회원탈퇴 성공:", response.data);
    } catch (error) {
      console.error("회원탈퇴 실패:", error);
      throw error;
    }
  };

  return { login, register, deleteUser, validation };
};

export default useAuthApi;
