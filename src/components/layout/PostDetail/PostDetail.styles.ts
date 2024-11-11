import styled from "styled-components";

export const PostFormContainer = styled.div``;

export const Section = styled.div`
  margin-top: 30px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px 0px;
  flex-wrap: wrap;
`;

export const FormColumn = styled.div`
  min-width: 570px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
`;

// 추가 스타일
export const Content = styled.pre`
  min-height: 240px;
  white-space: pre-wrap;
  font-size: var(--font-size-body-large);
  line-height: 1.6;
  color: var(--font-color-dark);

  /* 텍스트 스타일이 유지되도록 추가적인 스타일 지정 */
  b,
  strong {
    font-weight: var(--font-weight-bold); /* 원하는 굵기 */
  }

  i,
  em {
    font-style: italic; /* 기울임 적용 */
  }

  /* Quill 에디터에서 사용하는 h1, h2 스타일 지정 */
  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  /* 추가 스타일 지정 */
  .ql-align-center {
    text-align: center;
  }

  .ql-align-right {
    text-align: right;
  }

  .ql-size-small {
    font-size: 0.75em;
  }

  .ql-size-large {
    font-size: 1.5em;
  }

  .ql-size-huge {
    font-size: 2.5em;
  }

  /* 기타 Quill에서 적용한 스타일 추가 */
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  ol {
    list-style-type: decimal;
    padding-left: 20px;
  }
`;
