import { useNavigate } from "react-router-dom";
import axios from "axios";
import useChatStore from "../../store/useChatStore";
import { SERVER_URL } from "../../constants/Chat";
import { toast } from "react-toastify";

const useHandleInquiry = (
  userId: string,
  targetId: string,
  targetNickName: string
) => {
  const navigate = useNavigate();
  const { addChatRoom } = useChatStore();

  const handleInquiry = async () => {
    const user_list = [userId, targetId];
    if (userId === targetId) {
      toast.dismiss(); // 모든 알림 제거
      toast.success("게시글 작성자와 사용자가 동일합니다!", {
        autoClose: 2000,
      });
    } else {
      try {
        // Axios를 사용하여 API 호출
        const response = await axios.post(`${SERVER_URL}/room/exists`, {
          user_list,
        });

        // 응답값이 false일 때만 addChatRoom 호출
        if (!response.data.exists) {
          const userRooms = useChatStore.getState().userChatRooms[userId] || [];
          const roomExists = userRooms.some(
            (room) => room.otherUserId === targetId
          );

          if (!roomExists) {
            addChatRoom(userId, {
              name: `${targetNickName}`, // 타겟 닉네임
              otherUserId: targetId, // 타겟 아이디
              /**
               * TODO: 이 부분은 일단 default로 진행 백엔드에서 해당 user profiel index 불러와야함
               */
              profileImageIndex: 1,
            });
          }
        } else {
          console.log("이미 존재하는 채팅방입니다.");
        }

        console.log(response);
      } catch (error) {
        console.error("채팅방 확인 중 오류 발생:", error);
      }
      navigate("/chats");
    }
  };

  return handleInquiry;
};

export default useHandleInquiry;
