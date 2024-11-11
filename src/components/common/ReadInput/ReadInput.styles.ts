import styled from "styled-components";

interface StyledInputProps {
  $variant?: "primary" | "placeholder" | "default";
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: var(--font-size-body-medium);
  margin-bottom: 7px;
  font-weight: var(--font-weight-semi-bold);
  font-family: inherit;
`;

export const StyledInput = styled.input<StyledInputProps>`
  min-height: 50px;
  width: 570px;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 10px;
  font-size: var(--font-size-body-medium);
  font-weight: var(--font-weight-semi-bold);
  align-items: center;
  display: flex;
  border: 1px solid #d1d1d1;

  opacity: ${(props) => (props.$variant === "primary" ? 0.8 : 0.4)};

  background-color: ${(props) =>
    props.$variant === "primary"
      ? "var(--color-white)"
      : "var(--bg-gray-light)"};

  color: ${(props) => {
    switch (props.$variant) {
      case "primary":
        return "var(--primary-color-gra-start)"; // primary 색상
      case "placeholder":
        return "var(--bg-gray-light)"; // 연한 회색
      default:
        return "var(--font-color-dark)"; // 기본 검정색
    }
  }};
`;
