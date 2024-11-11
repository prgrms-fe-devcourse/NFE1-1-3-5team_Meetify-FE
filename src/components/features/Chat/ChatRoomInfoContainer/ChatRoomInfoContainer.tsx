import useAuthStore from "../../../../store/useAuthStore";
import useChatStore from "../../../../store/useChatStore";
import { ChatRoomInfo } from "../../../../types/Chat";
import BannerIcon from "../../../common/icon/BannerIcon/BannerIcon";
import ChatRoomItem from "../ChatRoomInfo/ChatRoomInfo";
import {
  ChatRoomInfoContainerWrapper,
  EmptyChatRoomInfoContainerWrapper,
} from "./ChatRoomInfoContainer.styles";

interface ChatRoomContainerProps {
  /** 채팅 정보 리스트 */
  chatRoomList?: ChatRoomInfo[] | null;
  onChatRoomClick?: (
    chatRoom: string,
    otherUserId: string,
    isEmptyRoom: boolean
  ) => void; // 클릭 이벤트 처리 함수
  selectedRoomId: string;
}
const ChatRoomContainer = ({
  chatRoomList,
  onChatRoomClick = () => {},
  selectedRoomId,
}: ChatRoomContainerProps) => {
  // chatRoomList가 null일 경우 빈 배열로 초기화
  const rooms = chatRoomList || [];

  // 채팅 방 전역 상태 관리
  const userId = useAuthStore((state) => state.email); // 현재 로그인한 유저 아이디
  const chatRooms = useChatStore((state) => state.userChatRooms[userId]);
  return rooms.length === 0 && !chatRooms ? (
    <EmptyChatRoomInfoContainerWrapper>
      <div className="contact">
        <BannerIcon></BannerIcon>
      </div>
      <p>지금 바로 Meetify 게시글에서</p>
      <p> 1:1 문의를 통해 대화를 시작해보세요</p>
    </EmptyChatRoomInfoContainerWrapper>
  ) : (
    <ChatRoomInfoContainerWrapper>
      {chatRooms &&
        chatRooms.map((chatRoom) => (
          <ChatRoomItem
            key={chatRoom.roomId}
            name={chatRoom.name}
            onClick={() =>
              onChatRoomClick(chatRoom.roomId, chatRoom.otherUserId, true)
            } // 클릭 시 roomId 전달
            roomId={chatRoom.roomId}
            selectedRoomId={selectedRoomId}
            profileImageIndex={chatRoom.profileImageIndex}
          />
        ))}
      {rooms.map((chatRoom) => (
        <ChatRoomItem
          key={chatRoom.roomId}
          profileImageIndex={chatRoom.profileImageIndex}
          name={chatRoom.name}
          unReadMsgCnt={chatRoom.unReadMsgCnt}
          lastMsg={chatRoom.lastMsg}
          creadtedAt={chatRoom.creadtedAt}
          onClick={() =>
            onChatRoomClick(chatRoom.roomId, chatRoom.otherUserId, false)
          } // 클릭 시 roomId 전달
          roomId={chatRoom.roomId}
          selectedRoomId={selectedRoomId}
        />
      ))}
    </ChatRoomInfoContainerWrapper>
  );
};

export default ChatRoomContainer;
