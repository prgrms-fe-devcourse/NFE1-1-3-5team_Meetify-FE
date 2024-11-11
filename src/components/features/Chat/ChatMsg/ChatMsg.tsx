import { convertDate2Time } from "../../../../utils/dateUtils";
import ChatMsgWrapper from "./ChatMsg.styles";

interface ChatMsgProps {
  /** 채팅 메시지 내용 */
  msg: string;
  /** 채팅 보낸 유저가 나인지 타인인지 구분 */
  isMe: boolean;
  /** 해당 채팅이 그룹에서 마지막 메시지인지 구분,(시간 표시 유무 구분)*/
  isLastMsg: boolean;
  /** 해당 채팅을 읽었는지 구분 */
  isRead: boolean;
  /** 해당 메시지 보낸 시간 */
  creadtedAt: string;
}
const ChatMsg = ({
  msg,
  isMe,
  creadtedAt,
  isRead,
  isLastMsg,
}: ChatMsgProps) => {
  const msgClass = isMe ? "my" : "other";
  const textAlignClass = isMe ? "text--end" : "text--start";
  const isReadClass = isRead ? "" : "not--read";

  const time = convertDate2Time(creadtedAt);

  return (
    <ChatMsgWrapper className={msgClass}>
      <div className="msg--info--con">
        <span className={`${textAlignClass} ${isReadClass}`}></span>
        {isLastMsg && <span className="time">{time}</span>}
      </div>
      <div className={`msg ${msgClass}`}>{msg}</div>
    </ChatMsgWrapper>
  );
};

export default ChatMsg;
