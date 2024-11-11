import styled from "styled-components";

export const StyledMyPostsContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: var(--font-size-head-large);
  font-weight: var(--font-weight-semi-bold);
  margin: 3rem 0 1rem 0;
  user-select: none;
`;

export const EmptyTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: var(--max-width);
  height: 500px;
  margin: 0 auto;
  text-align: center;
`;

export const EmptyBold = styled.span`
  font-weight: bold;
  font-size: var(--font-size-head-medium);
  font-weight: var(--font-weight-semi-bold);
  color: var(--primary-color-org);
  padding-bottom: 2rem;
`;

export const EmptyText = styled.span`
  font-size: var(--font-size-body-medium);
  line-height: 1.5;
  color: var(--font-color-light);
`;
