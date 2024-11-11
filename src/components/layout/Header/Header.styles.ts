import styled from "styled-components";

// 메인 페이지 배너 생각해서 background-color: transparent;로 설정
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  background-color: transparent;
  padding: 0 3rem;
  position: fixed;
  width: 100%;
  z-index: 10;
  transition: transform 0.3s ease;

  &.hidden {
    transform: translateY(-100%);
  }
`;

export const LogoContainer = styled.div`
  user-select: none;
  cursor: pointer;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > *:last-child {
    margin-left: 1rem;
  }
`;
