import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostDetail from "../../components/layout/PostDetail/PostDetail";
import { getPostById } from "../../services/postDetail/getPost";
import { PostDetailProps } from "../../types/Post";
import { Container, Content } from "./PostPage.styles";
import PostDetailMeet from "../../components/layout/PostDetailMeet/PostDetailMeet";
import { deletePost } from "../../services/postDetail/deletePost";
import LoadingSpinner from "../../components/common/LoadingSpinner/LoadingSpinner";
const PostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  // console.log("postId:", postId);
  const navigate = useNavigate();
  const [postData, setPostData] = useState<PostDetailProps["postData"] | null>(
    null
  );

  useEffect(() => {
    const fetchPostData = async () => {
      if (!postId) return;
      try {
        const data = await getPostById(postId);
        // console.log("게시글 데이터를 불러왔습니다:", data);
        // console.log("게시글 유저정보:", data.user_profile);
        // PostDetailProps["postData"] 형식에 맞게 변환
        const transformedData: PostDetailProps["postData"] = {
          id: data.id,
          type: data.type,
          title: data.title,
          content: data.content,
          interests: data.interests, // 배열로 들어오는 interests
          position: data.position, // 배열로 들어오는 position
          participation_method: data.participation_method,
          recruitment_capacity: data.recruitment_capacity,
          duration: data.duration,
          recruitment_deadline: data.recruitment_deadline,
          created_at: data.created_at,
          affiliation: data.affiliation,
          available_time: data.available_time,
          user_profile: {
            nickname: data.user_profile.nickname,
            email: data.user_profile.email,
            profile_image_index: data.user_profile.profile_image_index,
          },
        };
        // console.log("변환된 데이터:", transformedData);
        setPostData(transformedData);
      } catch (error) {
        console.error("게시글 데이터를 불러오는데 실패했습니다:", error);
        //alert("게시글 데이터를 불러오는데 실패했습니다.");
        //navigate("/"); // 오류 발생 시 메인 페이지로 이동
      }
    };

    fetchPostData();
  }, [postId, navigate]);

  // 수정 및 삭제 핸들러 정의
  const handleEdit = () => {
    if (postData && postData.type) {
      const editPage = postData.type.toLowerCase(); // type에 따라 'project', 'study', 'meet'와 같은 값을 사용
      navigate(`/post/update/${editPage}/${postId}`);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("정말로 이 게시글을 삭제하시겠습니까?");
    if (confirmed && postId) {
      console.log("게시글 삭제 요청:", postId);
      try {
        await deletePost(postId); // 서버에 삭제 요청
        navigate("/"); // 삭제 성공 후 메인 페이지로 리디렉션
      } catch (error) {
        console.error("게시글 삭제 중 오류 발생:", error);
        alert("게시글 삭제에 실패했습니다.");
      }
    }
  };

  if (!postData) return <LoadingSpinner />;

  return (
    <Container>
      <Content>
        {postData.type === "MEET" ? (
          <PostDetailMeet
            postData={postData} // Meet 타입의 데이터 전달
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : (
          <PostDetail
            postData={postData} // STUDY 또는 PROJECT 타입의 데이터 전달
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Content>
    </Container>
  );
};

export default PostPage;
