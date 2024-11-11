import dayjs from "dayjs";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";
import Button from "../../common/button/Button";
import {
  PostFormContainer,
  Section,
  Row,
  FormColumn,
  ButtonWrapper,
  Content,
} from "./PostDetail.styles";
import ReadInput from "../../common/ReadInput/ReadInput";
import ReadTitle from "../../common/ReadTitle/ReadTitle";
import handIcon from "../../../assets/post-image/hand.svg";
// import DummyProfileImage from "../../../assets/profile-image/Dummy-Profile-Image.png";
import useAuthStore from "../../../store/useAuthStore";
import { getProfileImagePath } from "../../../utils/getProfileImagePath";
import { formatDate } from "../../../utils/dateUtils";
import useHandleInquiry from "../../../hooks/Chat/useHandleInquiry";
import LoginModal from "../../features/login/LoginModal";
import useModal from "../../../hooks/useModal";
import RegisterModal from "../../features/register/RegisterModal";

// 상수 파일 import
import ParticipationMethod from "../../../constants/ParticipationMethod";
import Position from "../../../constants/Position";
import RecruitmentCapacity from "../../../constants/RecruitmentCapacity";
import Interests from "../../../constants/Interests";
import Duration from "../../../constants/Duration";

interface PostDetailProps {
  postData: {
    id: string;
    title: string;
    content: string;
    interests: string[];
    position: string[];
    participation_method: string;
    recruitment_capacity?: string;
    duration?: string;
    recruitment_deadline?: string;
    created_at: string;
    user_profile: {
      nickname: string;
      email: string;
      profile_image_index: number;
    };
  };
  onEdit: () => void;
  onDelete: () => void;
}

const ProjectDetail: React.FC<PostDetailProps> = ({
  postData,
  onEdit,
  onDelete,
}) => {
  const {
    isLogin,
    isModalOpen,
    isLoginView,
    handleClick,
    handleCloseModal,
    toggleModalView,
    handleLoginSuccess,
  } = useModal();
  const formattedDate = dayjs(postData.created_at).format("YYYY-MM-DD");
  const currentUserEmail = useAuthStore((state) => state.email); // 현재 로그인한 사용자 ID

  const profileImageIndex = postData.user_profile.profile_image_index;
  const postProfileImage = getProfileImagePath(profileImageIndex);
  // 문의하기 클릭 시 /chats로 이동
  const handleInquiry = useHandleInquiry(
    currentUserEmail,
    postData.user_profile.email,
    postData.user_profile.nickname
  );

  const handle1on1Chat = () => {
    if (!isLogin) {
      handleClick();
    } else {
      handleInquiry();
    }
  };
  // 공유하기 클릭 시 주소 복사 및 toast 메시지 표시
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast.success("주소가 복사되었습니다.");
    });
  };

  // 삭제 버튼 클릭 시 알림 표시
  const handleDelete = () => {
    onDelete(); // 실제 삭제 로직 호출
    toast.success("삭제되었습니다.");
  };
  // content를 DOMPurify로 정화
  const sanitizedContent = DOMPurify.sanitize(postData.content);

  return (
    <PostFormContainer>
      <Section>
        <ReadTitle
          text={postData.title}
          iconSrc={handIcon}
          author={postData.user_profile.nickname}
          authorImageSrc={postProfileImage}
          createdAt={formattedDate}
        />
        <Row>
          <FormColumn>
            <ReadInput
              label="진행 방식"
              value={
                ParticipationMethod[
                  postData.participation_method as keyof typeof ParticipationMethod
                ] || postData.participation_method
              }
              variant="primary"
            />
          </FormColumn>
          {postData.recruitment_capacity && (
            <FormColumn>
              <ReadInput
                label="모집 인원"
                value={
                  RecruitmentCapacity[
                    Number(
                      postData.recruitment_capacity
                    ) as keyof typeof RecruitmentCapacity
                  ] || postData.recruitment_capacity
                }
                variant="primary"
              />
            </FormColumn>
          )}
          <FormColumn>
            <ReadInput
              label="기술 스택"
              value={postData.interests
                .map(
                  (interest) =>
                    Interests[interest as keyof typeof Interests] || interest
                )
                .join(", ")}
              variant="primary"
            />
          </FormColumn>
          {postData.duration && (
            <FormColumn>
              <ReadInput
                label="진행 기간"
                value={
                  Duration[postData.duration as keyof typeof Duration] ||
                  postData.duration
                }
                variant="primary"
              />
            </FormColumn>
          )}
          <FormColumn>
            <ReadInput
              label="모집 포지션"
              value={postData.position
                .map((pos) => Position[pos as keyof typeof Position] || pos)
                .join(", ")}
              variant="primary"
            />
          </FormColumn>
          {postData.recruitment_deadline && (
            <FormColumn>
              <ReadInput
                label="모집 마감일"
                value={formatDate(new Date(postData.recruitment_deadline))}
                variant="primary"
              />
            </FormColumn>
          )}
        </Row>
      </Section>
      <ButtonWrapper>
        <Button
          buttonType="fill"
          buttonSize="medium"
          label="문의하기"
          onClick={handle1on1Chat} // /chats 페이지로 이동
        />
        <Button
          buttonType="outline"
          buttonSize="medium"
          label="공유하기"
          onClick={handleShare} // 현재 페이지 URL 복사 및 알림
        />
      </ButtonWrapper>
      <Section>
        <ReadTitle text="소개 내용" iconSrc={handIcon} />
        {/* DOMPurify로 정화된 HTML 콘텐츠를 렌더링 */}
        <Content dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
      </Section>

      {/* 작성자와 로그인 사용자가 동일할 때만 수정 및 삭제 버튼 표시 */}
      {postData.user_profile.email === currentUserEmail && (
        <ButtonWrapper>
          <Button
            buttonType="fill"
            buttonSize="medium"
            label="수정"
            onClick={onEdit}
          />
          <Button
            buttonType="outline"
            buttonSize="medium"
            label="삭제"
            onClick={handleDelete} // 삭제 시 알림 표시
          />
        </ButtonWrapper>
      )}
      {/* 로그인 안하고 1:1문의 클릭시 로그인 모달 띄움 */}
      {isModalOpen &&
        (isLoginView ? (
          <LoginModal
            onClose={handleCloseModal}
            onToggleView={toggleModalView} // 모달 전환 함수 전달
            onLoginSuccess={handleLoginSuccess} // 로그인 성공 시 처리 함수 전달
          />
        ) : (
          <RegisterModal
            onClose={handleCloseModal}
            onToggleView={toggleModalView} // 모달 전환 함수 전달
          />
        ))}
    </PostFormContainer>
  );
};

export default ProjectDetail;
