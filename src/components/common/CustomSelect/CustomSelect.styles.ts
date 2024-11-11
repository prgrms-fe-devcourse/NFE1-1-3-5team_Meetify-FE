import styled, { css } from "styled-components";

export const SelectWrapper = styled.div`
  margin-bottom: 30px;
`;

export const Label = styled.p`
  font-size: var(--font-size-body-medium);
  margin-bottom: 8px;
  font-weight: var(--font-weight-semi-bold);
  font-family: inherit;
`;

// default: 글 작성 Select, rounded: 카테고리 Select
export const StyledSelect = styled.div<{ $variant: "default" | "rounded" }>`
  .react--select__control {
    min-height: auto;
    width: 570px;
    color: var(--primary-color-org);
    border-radius: 10px;
    padding: 0 3px;
    font-size: var(--font-size-body-medium);
    font-weight: var(--font-weight-semi-bold);
    align-items: center;
    display: flex;

    ${({ $variant }) =>
      $variant === "rounded" &&
      css`
        width: 240px;
        height: 50px;
        border-radius: 30px;
        font-size: var(--font-size-body-medium);
      `}
  }
  .react--select__value-container {
    display: flex;
    flex-wrap: wrap; /* 선택 항목이 줄 바꿈되도록 설정 */
    align-items: flex-center;
    min-height: 50px;

    ${({ $variant }) =>
      $variant === "rounded" &&
      css`
        min-height: 50px;
        flex-wrap: nowrap; /* 줄바꿈을 없앰 */
        overflow: hidden; /* 오버플로우 숨기기 */
        text-overflow: ellipsis; /* 줄임표 표시 */
        white-space: nowrap; /* 한 줄로 유지 */
      `}
  }
  .react--select__menu {
    width: ${({ $variant }) => ($variant === "rounded" ? "240px" : "600px")};
  }

  .react--select__indicator-separator {
    display: none;
  }
`;

// CustomMultiValue의 스타일을 위한 컨테이너
export const MultiValueContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary-color-org);
  font-weight: bold;
`;
