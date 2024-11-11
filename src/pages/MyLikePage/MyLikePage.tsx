import { CardContainer, Pagination } from "../../components/common";
import {
  StyledMyLikeContainer,
  Title,
  EmptyTextWrapper,
  EmptyBold,
  EmptyText,
} from "./MyLikePage.styles";
import useMyLikePage from "../../hooks/useMyLikePage";
import LoadingSpinner from "../../components/common/LoadingSpinner/LoadingSpinner";

const MyLikePage = () => {
  const { postList, currentPage, totalPage, handlePageChange } =
    useMyLikePage(true);

  if (!postList) return <LoadingSpinner />;

  return (
    <StyledMyLikeContainer>
      <Title>관심글 목록</Title>
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
          <EmptyBold>관심글이 없습니다.</EmptyBold>
          <EmptyText>관심있는 글에 ♥ 버튼을 눌러보세요!</EmptyText>
        </EmptyTextWrapper>
      )}
    </StyledMyLikeContainer>
  );
};

export default MyLikePage;
