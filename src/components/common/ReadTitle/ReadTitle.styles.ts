import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;

  border-radius: 50%;
  margin-right: 12px;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const TitleText = styled.span`
  font-size: var(--font-size-head-medium);
  font-weight: var(--font-weight-semi-bold);
  color: var(--font-color-dark);
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-size-body-large);
  font-weight: var(--font-weight-regular);
  color: var(--font-color-dark);
  margin-top: 8px;
`;

export const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 5px;
  margin-right: 12px;
`;

export const AuthorName = styled.span`
  margin-right: 12px;
  color: var(--font-color-dark);
`;

export const CreatedDate = styled.span`
  margin-left: auto;
  color: var(--font-color-dark);
`;

export const Divider = styled.div`
  border-bottom: 3px solid var(--color-gray-light);
  margin: 5px 0 20px 0;
`;
