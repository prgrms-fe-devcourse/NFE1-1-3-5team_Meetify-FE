import axios from "axios";
import { PostFormData, PostFormMeetData } from "../../types/Post";
import { preparePostData, preparePostDataMeet } from "./preparePostData";

const SERVER_URL = import.meta.env.VITE_API_URL;

export const updateProjectPost = async (
  postId: string,
  postData: PostFormData
) => {
  const transformedData = preparePostData(postData, "PROJECT");
  console.log("변환된 데이터 확인:", transformedData);
  return await axios.patch(
    `${SERVER_URL}/post-detail/${postId}`,
    transformedData
  );
};

export const updateStudyPost = async (
  postId: string,
  postData: PostFormData
) => {
  const transformedData = preparePostData(postData, "STUDY");
  console.log("변환된 데이터 확인:", transformedData);
  return await axios.patch(
    `${SERVER_URL}/post-detail/${postId}`,
    transformedData
  );
};

export const updateMeetPost = async (
  postId: string,
  postData: PostFormMeetData
) => {
  const transformedData = preparePostDataMeet(postData, "MEET");
  return await axios.patch(
    `${SERVER_URL}/post-detail/${postId}`,
    transformedData
  );
};
