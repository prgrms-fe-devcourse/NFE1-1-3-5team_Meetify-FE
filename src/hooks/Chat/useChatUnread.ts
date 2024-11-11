import { useState, useEffect } from "react";
import { SERVER_URL } from "../../constants/Chat";
import useAuthStore from "../../store/useAuthStore";

// useChatUnread 커스텀 훅
const useChatUnread = (userId: string) => {
  const [unreadCount, setUnreadCount] = useState(0); // 채팅 UnRead 메시지 cnt
  const { isLogin } = useAuthStore();
  useEffect(() => {
    if (!isLogin) {
      setUnreadCount(0);
    }
  }, [isLogin]);
  useEffect(() => {
    if (!userId) return; // userId가 없으면 SSE 연결하지 않음

    const eventSource = new EventSource(
      `${SERVER_URL}/chat/unread/cnt/${userId}`
    );

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      setUnreadCount(data.cnt); // 상태를 업데이트하여 화면에 반영
    };

    eventSource.onerror = (error) => {
      console.error("SSE Error:", error);
      eventSource.close();
    };

    // 컴포넌트 언마운트 시 연결 종료
    return () => {
      eventSource.close();
    };
  }, [userId]);

  return { unreadCount, setUnreadCount }; // 사용된 컴포넌트에서 unreadCount를 반환
};

export default useChatUnread;
