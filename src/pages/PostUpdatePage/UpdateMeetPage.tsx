// src/pages/UpdateMeetPage.tsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostFormMeet from "../../components/layout/PostFormMeet/PostFormMeet";
import { PostFormMeetData } from "../../types/Post";
import { updateMeetPost } from "../../services/postDetail/updatePost";
import { getPostById } from "../../services/postDetail/getPost";
import { SelectOption } from "../../types/types";
import {
  ParticipationMethodOptions,
  AffiliationOptions,
  InterestsOptions,
  PositionOptions,
  AvailableTimeOptions,
} from "../../constants/options";
import LoadingSpinner from "../../components/common/LoadingSpinner/LoadingSpinner";

const UpdateMeetPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState<PostFormMeetData | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      if (!postId) return;

      try {
        const data = await getPostById(postId); // 서버에서 게시글 데이터 가져오기
        console.log("서버에서 받은 MEET 수정 데이터:", data);

        const transformedData: PostFormMeetData = {
          inputValue: data.title,
          content: data.content,
          participationMethod:
            ParticipationMethodOptions.find(
              (option) => option.value === data.participation_method
            ) || null,
          interests: data.interests
            .map((interest: string) =>
              InterestsOptions.find((option) => option.value === interest)
            )
            .filter(Boolean) as SelectOption[],
          affiliation:
            AffiliationOptions.find(
              (option) => option.value === data.affiliation
            ) || null,
          position: data.position
            .map((pos: string) =>
              PositionOptions.find((option) => option.value === pos)
            )
            .filter(Boolean) as SelectOption[],
          availableTime:
            AvailableTimeOptions.find(
              (option) => option.value === data.available_time
            ) || null,
        };

        console.log("초기 수정 데이터:", transformedData);
        setInitialData(transformedData);
      } catch (error) {
        console.error("게시글 데이터를 불러오는데 실패했습니다:", error);
        alert("게시글 데이터를 불러오는데 실패했습니다.");
        navigate("/"); // 오류 발생 시 메인 페이지로 이동
      }
    };

    fetchPostData();
  }, [postId, navigate]);

  const handleSubmit = async (data: PostFormMeetData) => {
    try {
      console.log("전송할 데이터:", data);
      await updateMeetPost(postId!, data); // 수정된 게시글 데이터 서버에 저장
      console.log("게시글 수정 성공");
      navigate(`/post/${postId}`); // 수정된 게시글의 상세 페이지로 이동
    } catch (error) {
      console.error("게시글 수정 오류:", error);
      alert("게시글 수정에 실패했습니다.");
    }
  };

  const handleCancel = () => {
    navigate(-1); // 취소 버튼 클릭 시 이전 페이지로 이동
  };

  if (!initialData) return <LoadingSpinner />;

  return (
    <PostFormMeet
      title="Meet 수정"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      initialData={initialData} // 초기 데이터 전달
    />
  );
};

export default UpdateMeetPage;
