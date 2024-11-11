import { useNavigate } from "react-router-dom";
import {
  DropdownContainer,
  Divider,
  ProfileContainer,
  ProfileImageContainer,
} from "./ProfileDropdown.styled";

import MenuItem from "./MenuItem/MenuItem";
import ProfileImage from "../../common/ProfileImage/ProfileImage";
import MyPageIcon from "../../common/icon/MyPageIcon/MyPageIcon";
import EmptyHeartIcon from "../../common/icon/EmptyHeartIcon/EmptyHeartIcon";
import MyPostIcon from "../../common/icon/MyPostIcon/MyPostIcon";
import LogoutIcon from "../../common/icon/LogoutIcon/LogoutIcon";
import { getProfileImagePath } from "../../../utils/getProfileImagePath";
// import DummyProfileImage from "../../../assets/profile-image/Dummy-Profile-Image.png";
import useAuthStore from "../../../store/useAuthStore";

interface DropdownProps {
  isVisible: boolean;
  closeDropdown: () => void;
}

/**
 * TODO:
 * ProfileDropdown 노출 숨김 로직 조건에 따라 컴포넌트가 호출되도록 수정 고려
 * 현재는 isVisible 값에 따라 css로 노출 여부를 결정하고 있음
 */
const ProfileDropdown: React.FC<DropdownProps> = ({
  isVisible,
  closeDropdown,
}) => {
  const userNickname = useAuthStore((state) => state.nickname);
  const profileImageIndex = useAuthStore((state) => state.profileImageIndex);
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const loginProfileImage = getProfileImagePath(profileImageIndex);

  const handleClickMyPage = () => {
    closeDropdown();
    navigate("/my-info/");
  };

  const handleClickMyLike = () => {
    closeDropdown();
    navigate("/my-like");
  };

  const handleClickMyPost = () => {
    closeDropdown();
    navigate("/my-posts");
  };

  const handleClickSignOut = () => {
    // 로그아웃 처리 훅 혜수님 작업 완료되면 연결
    logout();
    closeDropdown();
    // 로그아웃 후 메인 페이지로 이동
    navigate("/");
  };

  return (
    <DropdownContainer $isVisible={isVisible}>
      <ProfileContainer>
        <ProfileImageContainer>
          <ProfileImage src={loginProfileImage} usageType="card" />
        </ProfileImageContainer>
        {userNickname && <span>{userNickname}</span>}
      </ProfileContainer>
      <Divider />
      <MenuItem
        icon={<MyPageIcon />}
        label="마이페이지"
        onClick={handleClickMyPage}
      />
      <MenuItem
        icon={<EmptyHeartIcon />}
        label="내 관심글 목록"
        onClick={handleClickMyLike}
      />
      <MenuItem
        icon={<MyPostIcon />}
        label="내 작성글 목록"
        onClick={handleClickMyPost}
      />
      <Divider />
      <MenuItem
        icon={<LogoutIcon />}
        label="Sign Out"
        onClick={handleClickSignOut}
      />
    </DropdownContainer>
  );
};

export default ProfileDropdown;
