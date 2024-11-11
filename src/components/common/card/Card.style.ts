import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  aspect-ratio: 1;
  padding: 1.5rem;
  border-radius: 30px;
  border: 1px solid var(--bg-gray-light);
  background-color: var(--color-white);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  position: relative;
`;

export const DateText = styled.span`
  color: var(--font-color-light);
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-semi-bold);
`;

export const Title = styled.span`
  margin: 0;
  color: var(--font-color-dark);
  font-size: var(--font-size-head-small);
  font-weight: var(--font-weight-semi-bold);
  line-height: 1.3;
  height: calc(1.3em * 2);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AuthorName = styled.span`
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-semi-bold);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
`;
