import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const CustomSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  /* font-size: var(--font-size-body-small); */
`;

export const SearchBarWrapper = styled.div`
  // CustomSelect 와 동일하게 맞추기위함
  margin-bottom: 30px;
`;

export const EmptyTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: var(--max-width);
  height: 300px;
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
