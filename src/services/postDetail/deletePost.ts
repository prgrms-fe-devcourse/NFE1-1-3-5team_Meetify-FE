import axios from "axios";

const SERVER_URL = import.meta.env.VITE_API_URL;

export const deletePost = async (postId: string): Promise<void> => {
  console.log("게시글 삭제 요청 deletepost:", postId);
  try {
    await axios.delete(`${SERVER_URL}/post-detail/${postId}`);
    console.log("게시글이 삭제되었습니다:", postId);
  } catch (error) {
    console.error("게시글 삭제 중 오류 발생:", error);
    throw error;
  }
};
