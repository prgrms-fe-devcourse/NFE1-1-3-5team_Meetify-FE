import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileImage from "../ProfileImage/ProfileImage";
import { PostType, Interests, Position } from "../../../constants/index";
import { formatDate, isToday } from "../../../utils/dateUtils";
import { sliceList } from "../../../utils/arrayUtils";
import {
  StyledCard,
  Header,
  DateText,
  Title,
  Author,
  AuthorName,
} from "./Card.style";
import {
  LikeButton,
  NewTag,
  PositionTagContainer,
  PostTag,
  TechIconContainer,
} from "./elements/index";
import { PostListResParams } from "../../../types/PostList";
import useMyLikePage from "../../../hooks/useMyLikePage";
import useModal from "../../../hooks/useModal";
import LoginModal from "../../features/login/LoginModal";
/**
 * TODO
 * 임시로 사용하는 프로필 이미지로 첨부파일 업로드기능 개발 시, 실제 프로필이미지로 교체
 */
// import DummyProfileImage from "../../../assets/profile-image/Dummy-Profile-Image.png";
import { getProfileImagePath } from "../../../utils/getProfileImagePath";

// (포지션, 기술스택) 최대 표시 개수 정의
const MAX_POSITION_DISPLAY = 3;
const MAX_TECH_STACK_DISPLAY = 8;

const Card = ({
  /** 게시글 고유번호 */
  id,
  /** 관심글 유/무 */
  isLiked: initialIsLiked,
  /** 모집유형 */
  type,
  /** 작성일 */
  created_at,
  /** 마감일 */
  recruitment_deadline,
  /** 제목 */
  title,
  /** 모집포지션 */
  position,
  /** 기술스택 리스트 */
  interests,
  /** 작성자 닉네임 */
  user_profile,
}: PostListResParams) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const location = useLocation();
  const navigate = useNavigate();
  const isLikePage = location.pathname === "/my-like";
  const profileImageIndex = user_profile.profile_image_index;
  const postProfileImage = getProfileImagePath(profileImageIndex);

  // 날짜 포맷팅
  const createDate = new Date(created_at);
  const formattedDate = recruitment_deadline
    ? formatDate(new Date(recruitment_deadline))
    : "미정";

  // (포지션, 기술 스택) 최대 표시 개수 노출
  const displayedPositions = sliceList(
    position.map((pos) => pos as keyof typeof Position),
    MAX_POSITION_DISPLAY
  );
  const displayedTechStacks = sliceList(
    interests.map((tech) => tech as keyof typeof Interests),
    MAX_TECH_STACK_DISPLAY
  );

  // 관심글 로그인 체크
  const {
    isLogin,
    isModalOpen,
    handleClick,
    handleCloseModal,
    toggleModalView,
    handleLoginSuccess,
  } = useModal();

  // 관심글 추가/삭제 핸들러
  const { handleLikeAdd, handleLikeRemove } = useMyLikePage(isLikePage);
  const handleLikeButtonClick = (event: React.MouseEvent) => {
    event?.stopPropagation();
    if (!isLogin) {
      handleClick();
    } else {
      handleLikeAddRemove();
    }
  };
  const handleLikeAddRemove = () => {
    if (isLiked) {
      handleLikeRemove(id);
    } else {
      handleLikeAdd(id);
    }
    setIsLiked(!isLiked);
  };

  // 디테일 페이지 이동
  const handleCardClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <>
      <StyledCard onClick={handleCardClick}>
        <Header>
          <PostTag postType={type as keyof typeof PostType} />
          {isToday(createDate) && <NewTag />}
          <LikeButton
            isLiked={isLiked}
            onClick={(e: React.MouseEvent) => handleLikeButtonClick(e)}
          />
        </Header>

        <DateText>마감일 | {formattedDate}</DateText>
        <Title>{title}</Title>

        <PositionTagContainer positionList={displayedPositions} />
        <TechIconContainer techStackList={displayedTechStacks} />

        <Author>
          <ProfileImage src={postProfileImage} usageType="card" />
          <AuthorName>{user_profile.nickname}</AuthorName>
        </Author>
      </StyledCard>

      {isModalOpen && !isLogin && (
        <LoginModal
          onClose={handleCloseModal}
          onToggleView={toggleModalView}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
};

export default Card;
