import { CardContainer, Pagination } from "../../components/common";
import {
  StyledMyPostsContainer,
  Title,
  EmptyTextWrapper,
  EmptyBold,
  EmptyText,
} from "./MyPostsPage.styles";
import useMyPostsPage from "../../hooks/useMyPostsPage";
import LoadingSpinner from "../../components/common/LoadingSpinner/LoadingSpinner";

const MyPostsPage = () => {
  const { postList, currentPage, totalPage, handlePageChange } =
    useMyPostsPage();

  if (!postList) return <LoadingSpinner />;

  return (
    <StyledMyPostsContainer>
      <Title>작성글 목록</Title>
      {postList && postList.length > 0 ? (
        <>
          <CardContainer postList={postList} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPage}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <EmptyTextWrapper>
          <EmptyBold>작성한 글이 없습니다.</EmptyBold>
          <EmptyText>새 글을 작성하여 팀 모집을 시작해 보세요!</EmptyText>
        </EmptyTextWrapper>
      )}
    </StyledMyPostsContainer>
  );
};

export default MyPostsPage;
