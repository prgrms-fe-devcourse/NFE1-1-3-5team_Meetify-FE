import styled from "styled-components";

export const InputWrapper = styled.div`
  max-width: 100%;
  margin-bottom: 30px;
`;

export const Label = styled.p`
  font-size: var(--font-size-body-medium);
  margin-bottom: 8px;
  font-weight: var(--font-weight-semi-bold);
  font-family: inherit;
`;

export const StyledInput = styled.input`
  width: 100%;
  min-height: 50px;
  border: 1px solid var(--bg-gray-light);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0 10px;
  font-size: var(--font-size-body-medium);
  font-weight: var(--font-weight-semi-bold);
  color: var(--font-color-dark);

  &::placeholder {
    color: var(--bg-gray-light);
  }

  &:focus {
    border: 2px solid var(--primary-color-org);
    outline: none;
  }
`;
