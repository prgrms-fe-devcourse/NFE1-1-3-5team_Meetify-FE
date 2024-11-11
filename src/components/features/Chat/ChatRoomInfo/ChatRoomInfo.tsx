import { DEFAULT_LAST_MSG } from "../../../../constants/Chat";
import { convertDate2ClentTime } from "../../../../utils/dateUtils";
import { getProfileImagePath } from "../../../../utils/getProfileImagePath";
import ChatRoomInfoWrapper from "./ChatRoomInfo.styles";
import ChatUnReadCnt from "./ChatUnReadCnt/ChatUnReadCnt";

interface ChatRoomItemProps {
  /** 방 id */
  roomId: string;
  /** 유저가 선택한 방 id */
  selectedRoomId: string;
  /** 프로필 이미지 인덱스 */
  profileImageIndex: number;
  /** 닉네임 */
  name: string;
  /** 마지막에 온 메시지 */
  lastMsg?: string;
  /** 안 읽은 메시지 개수 */
  unReadMsgCnt?: number;
  /** 마지막 메시지 온 시간 */
  creadtedAt?: string;
  /** 온 클릭 함수 */
  onClick?: () => void;
}
const ChatRoomItem = ({
  roomId = "1",
  selectedRoomId,
  profileImageIndex = 1,
  name,
  unReadMsgCnt = 0,
  lastMsg = DEFAULT_LAST_MSG,
  creadtedAt,
  onClick,
}: ChatRoomItemProps) => {
  const lastMsgTime = creadtedAt ? convertDate2ClentTime(creadtedAt) : "";
  return (
    <ChatRoomInfoWrapper
      className={roomId === selectedRoomId ? "active" : ""}
      onClick={onClick}
    >
      <div className="profile--and--msg">
        <img src={getProfileImagePath(profileImageIndex)}></img>
        <div className="name--and--msg">
          <strong>{name}</strong>
          <span>{lastMsg}</span>
        </div>
      </div>
      <div className="time--and--cnt">
        <div>{lastMsgTime}</div>
        {unReadMsgCnt !== 0 && <ChatUnReadCnt num={unReadMsgCnt} />}
      </div>
    </ChatRoomInfoWrapper>
  );
};

export default ChatRoomItem;
