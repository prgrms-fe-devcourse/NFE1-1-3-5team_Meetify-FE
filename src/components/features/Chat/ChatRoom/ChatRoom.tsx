import { useRef, useState, useEffect } from "react";
import ChatInput from "../ChatInput/ChatInput";
import ChatRoomWrapper from "./ChatRoom.styles";
import ChatMsgContainer from "../ChatMsgContainer/ChatMsgContainer";
import ChatDay from "../ChatDay/ChatDay";
import { ServerChat } from "../../../../types/Chat";
import { useChatGroups } from "../../../../hooks/Chat/useChatGroups";
import { convertDate2Str } from "../../../../utils/dateUtils";
import BannerIcon from "../../../common/icon/BannerIcon/BannerIcon";
import {
  useAutoScroll,
  useChatFocus,
  useUnreadChatIds,
} from "../../../../hooks/Chat/useChatRoomHooks";

interface ChatRoomProps {
  chatList?: ServerChat[] | null;
  myUsername: string;
  roomId?: string;
  sendMessage: (msg: string, targetId: string) => void;
  sendUnReadMessage: (unreadChatIds: string[], roomId?: string) => void;
  otherUserId: string;
}

const ChatRoom = ({
  chatList,
  myUsername,
  roomId,
  sendMessage,
  sendUnReadMessage,
  otherUserId,
}: ChatRoomProps) => {
  const [newChats, setNewChats] = useState<ServerChat[]>([]);
  const chatGroups = useChatGroups(newChats, myUsername);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // 포커스 상태 관리 훅
  const { isFocused, handleFocusChange } = useChatFocus();

  // unreadChatIds 관리 훅
  const unreadChatIds = useUnreadChatIds(isFocused, chatList, myUsername);

  // 스크롤 자동 이동 훅
  useAutoScroll(chatEndRef, chatGroups);

  useEffect(() => {
    sendUnReadMessage(unreadChatIds, roomId);
  }, [unreadChatIds, roomId, sendUnReadMessage]);

  useEffect(() => {
    if (chatList) {
      setNewChats(chatList);
    }
  }, [chatList]);

  const handleMsg = (msg: string) => {
    const newChat: ServerChat = {
      chat_id: "",
      room_id: roomId || "",
      sender: myUsername,
      is_read: false,
      msg,
      created_at: new Date().toString(),
    };

    setNewChats((prevChats) => [...prevChats, newChat]);
    sendMessage(msg, otherUserId);
  };

  return roomId === "" ? (
    <ChatRoomWrapper className="no--msg">
      <BannerIcon />
      <p>대화방을 선택해주세요.</p>
    </ChatRoomWrapper>
  ) : (
    <ChatRoomWrapper
      tabIndex={0}
      onFocus={() => handleFocusChange?.(true)} // 포커스 상태 변경
      onBlur={() => handleFocusChange?.(false)} // 포커스 상태 변경
    >
      <div className="chat--item">
        {chatGroups.map((group, index) => {
          const msgDay = convertDate2Str(group.chatList[0].creadtedAt);

          return (
            <div key={index} className="chat--date--item">
              {index === 0 ||
              msgDay !==
                convertDate2Str(
                  chatGroups[index - 1].chatList[0].creadtedAt
                ) ? (
                <div className="chat--day">
                  <ChatDay date={msgDay} />
                </div>
              ) : null}
              <ChatMsgContainer
                key={index}
                chatList={group.chatList}
                isMe={group.isMe}
                userNickName={group.userNickName}
              />
            </div>
          );
        })}
        <div ref={chatEndRef} />
      </div>
      <ChatInput onClick={handleMsg} onFocusChange={handleFocusChange} />
    </ChatRoomWrapper>
  );
};

export default ChatRoom;
