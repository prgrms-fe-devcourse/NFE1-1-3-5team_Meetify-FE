import ChatsPageWrapper, {
  ChatRoomInfoContainerWrapper,
  ToggleSidebarButton,
} from "./ChatsPage.style";
import { fetchData } from "../../utils/dataUtil";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChatRoomInfo, ServerChat } from "../../types/Chat";
import ChatRoomInfoContainer from "../../components/features/Chat/ChatRoomInfoContainer/ChatRoomInfoContainer";
import ChatRoom from "../../components/features/Chat/ChatRoom/ChatRoom";
import useAuthStore from "../../store/useAuthStore";
import useAuthCheck from "../../hooks/Chat/useAuthCheck";
import useSocket from "../../hooks/Chat/useSocket";
import { SERVER_URL } from "../../constants/Chat";
import ListIcon from "../../components/common/icon/ListIcon/ListIcon";
import useChatProfileStore from "../../store/useChatProfileStore";

const ChatsPage = () => {
  /* 1. 로그인 상태가 아니면 Error 페이지로 리다이렉트 */
  useAuthCheck();

  const [isSidebarOpen, setSidebarOpen] = useState(false); //반응형 사이드 바 관련 상태
  const sidebarRef = useRef<HTMLDivElement>(null); //반응형 사이드 바 관련 ref
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen); //반응형 사이드 바 온클릭 함수

  const [data, setData] = useState<ChatRoomInfo[] | null>(null); //유저별 채팅 방 리스트
  const [chatList, setChatList] = useState<ServerChat[]>([]); //채팅 방 채팅리스트
  const [currentRoomId, setCurrentRoomId] = useState<string>(""); //현재 선택된 방 ID
  const [otherUserId, setOtherUserId] = useState<string>(""); //다른 유저 아이디

  const userId = useAuthStore((state) => state.email); // 현재 로그인한 유저 아이디
  const userNickName = useAuthStore((state) => state.nickname); // 현재 로그인한 유저 아이디

  const setProfileIndex = useChatProfileStore((state) => state.setProfileIndex);
  // 소켓 훅 사용
  const { sendMessage, sendUnReadMessage } = useSocket({
    userId,
    onMessage: useCallback((chat) => {
      setChatList((prevChatList) => {
        // prevChatList가 존재하고 첫 번째 아이템의 room_id가 chat.room_id와 같을 때만 실행
        if (prevChatList?.[0]?.room_id === chat.room_id) {
          return [...prevChatList, chat];
        }
        // 조건이 맞지 않으면 이전 상태 그대로 반환
        return prevChatList;
      });
    }, []),
    onUnreadUpdate: useCallback((unreadData, roomId) => {
      if (roomId) {
        setCurrentRoomId(roomId);
        const matchingRoom = unreadData.find((data) => data.roomId === roomId);
        if (matchingRoom) handleClick(roomId, matchingRoom.otherUserId, false);
      }
      setData(unreadData);
    }, []),
    onMessageRead: useCallback((unreadChatIds, updatedRooms) => {
      setChatList(
        (prevChatList) =>
          prevChatList?.map((chat) =>
            unreadChatIds.includes(chat.chat_id)
              ? { ...chat, is_read: true }
              : chat
          ) || []
      );
      setData(updatedRooms);
    }, []),
  });

  //채팅페이지 접속시 유저가 가지고 있는 채팅 방 리스트 호출
  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const chatData: ChatRoomInfo[] = await fetchData(
          `${SERVER_URL}/chat/rooms/${userId}`
        );
        setData(chatData);
      } catch (error) {
        console.error("Error fetching chat rooms:", error);
      }
    };
    fetchChatRooms();
  }, [userId]);

  // 채팅 방 클릭시 해당 채팅 방의 채팅리스트 호출
  const handleClick = (
    roomId: string,
    otherUserId: string,
    isEmptyRoom: boolean
  ) => {
    const fetchChatList = async () => {
      try {
        const {
          chatListData,
          profileIndex,
        }: { chatListData: ServerChat[]; profileIndex: number } =
          await fetchData(`${SERVER_URL}/chat/${roomId}/${otherUserId}`);
        setChatList(chatListData);
        setProfileIndex(profileIndex);
      } catch (error) {
        console.error("Error fetching chat rooms:", error);
      }
    };
    setCurrentRoomId(roomId);
    setOtherUserId(otherUserId);
    if (isEmptyRoom) {
      setChatList([]);
    } else {
      fetchChatList();
    }
  };

  // 포커스 벗어나면 사이드바 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <ChatsPageWrapper>
      <ToggleSidebarButton onClick={toggleSidebar}>
        {isSidebarOpen ? "" : <ListIcon />}
      </ToggleSidebarButton>
      <ChatRoomInfoContainerWrapper ref={sidebarRef} $isOpen={isSidebarOpen}>
        <ChatRoomInfoContainer
          chatRoomList={data}
          onChatRoomClick={handleClick}
          selectedRoomId={currentRoomId}
        />
      </ChatRoomInfoContainerWrapper>

      <ChatRoom
        chatList={chatList}
        roomId={currentRoomId}
        myUsername={userNickName}
        sendMessage={sendMessage}
        sendUnReadMessage={sendUnReadMessage}
        otherUserId={otherUserId}
      />
    </ChatsPageWrapper>
  );
};

export default ChatsPage;
