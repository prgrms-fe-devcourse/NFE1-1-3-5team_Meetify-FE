import { getProfileImagePath } from "../../../../utils/getProfileImagePath";
import ChatMsgProfileWrapper from "./ChatMsgProfile.styles";

interface ChatMsgProfileProps {
  /** 프로필 이미지 경로 */
  profileImageIndex: number;
  /** 닉네임 */
  name: string;
}

const ChatMsgProfile = ({
  profileImageIndex = 1,
  name,
}: ChatMsgProfileProps) => {
  const url = getProfileImagePath(profileImageIndex);
  return (
    <ChatMsgProfileWrapper>
      <img src={url} alt="프로필_이미지" />
      <span>{name}</span>
    </ChatMsgProfileWrapper>
  );
};

export default ChatMsgProfile;
