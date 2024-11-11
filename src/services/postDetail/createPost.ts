import axios from "axios";
import { PostFormData, PostFormMeetData } from "../../types/Post";
import { preparePostData, preparePostDataMeet } from "./preparePostData"; // preparePostData 함수 임포트

const SERVER_URL = import.meta.env.VITE_API_URL;

// 프로젝트 게시글 생성 함수
export const createProjectPost = async (postData: PostFormData) => {
  try {
    const preparedData = preparePostData(postData, "PROJECT");
    const response = await axios.post(
      `${SERVER_URL}/post-detail`,
      preparedData
    );
    console.log("보내는 데이터 확인:", response.data);
    return response.data;
  } catch (error) {
    console.error("프로젝트 게시글 작성 중 오류 발생:", error);
    throw error;
  }
};

// 스터디 게시글 생성 함수
export const createStudyPost = async (postData: PostFormData) => {
  try {
    const preparedData = preparePostData(postData, "STUDY");
    const response = await axios.post(
      `${SERVER_URL}/post-detail`,
      preparedData
    );
    console.log("보내는 데이터 확인:", response.data);
    return response.data;
  } catch (error) {
    console.error("스터디 게시글 작성 중 오류 발생:", error);
    throw error;
  }
};

// 모임 게시글 생성 함수
export const createMeetPost = async (postData: PostFormMeetData) => {
  try {
    const preparedData = preparePostDataMeet(postData, "MEET");
    const response = await axios.post(
      `${SERVER_URL}/post-detail`,
      preparedData
    );
    console.log("보내는 데이터 확인:", response.data);
    return response.data;
  } catch (error) {
    console.error("Meet 게시글 작성 중 오류 발생:", error);
    throw error;
  }
};
