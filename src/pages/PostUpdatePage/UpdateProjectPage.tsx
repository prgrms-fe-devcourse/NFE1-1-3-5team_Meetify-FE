import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../../components/layout/PostForm/PostForm";
import { PostFormData } from "../../types/Post";
import { updateProjectPost } from "../../services/postDetail/updatePost";
import { getPostById } from "../../services/postDetail/getPost";
import { SelectOption } from "../../types/types";
import {
  ParticipationMethodOptions,
  RecruitmentCapacityOptions,
  InterestsOptions,
  PositionOptions,
  DurationOptions,
} from "../../constants/options";
import LoadingSpinner from "../../components/common/LoadingSpinner/LoadingSpinner";
import dayjs from "dayjs";

const UpdateProjectPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState<PostFormData | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      if (!postId) return;

      try {
        const data = await getPostById(postId); // 서버에서 게시글 데이터 가져오기

        const transformedData: PostFormData = {
          inputValue: data.title,
          content: data.content,
          selectedDate: data.recruitment_deadline
            ? dayjs(data.recruitment_deadline)
            : null,
          participationMethod:
            ParticipationMethodOptions.find(
              (option) => option.value === data.participation_method
            ) || null,
          recruitmentCapacity:
            data.recruitment_capacity !== undefined
              ? RecruitmentCapacityOptions.find(
                  (option) =>
                    option.value === data.recruitment_capacity?.toString()
                ) || null
              : null,
          interests: data.interests
            .map((interest: string) =>
              InterestsOptions.find((option) => option.value === interest)
            )
            .filter(Boolean) as SelectOption[],
          position: data.position
            .map((pos: string) =>
              PositionOptions.find((option) => option.value === pos)
            )
            .filter(Boolean) as SelectOption[],
          duration:
            DurationOptions.find((option) => option.value === data.duration) ||
            null,
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

  const handleSubmit = async (data: PostFormData) => {
    try {
      console.log("전송할 데이터:", data);
      await updateProjectPost(postId!, data); // 수정된 게시글 데이터 서버에 저장
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
    <PostForm
      title="프로젝트 수정"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      initialData={initialData} // 초기 데이터 전달
    />
  );
};

export default UpdateProjectPage;
