import axios from "axios";
import { PostDetailProps } from "../../types/Post";

const SERVER_URL = import.meta.env.VITE_API_URL;

export const getPostById = async (
  postId: string
): Promise<PostDetailProps["postData"]> => {
  try {
    const response = await axios.get(`${SERVER_URL}/post-detail/${postId}`);
    return response.data;
  } catch (error) {
    console.error("게시글 데이터를 가져오는데 실패했습니다:", error);
    throw new Error("게시글 데이터를 가져오는데 실패했습니다.");
  }
};
