import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  100% {
    top: -20px;
    text-shadow: 0 1px 0 #f7f5f4,
                 0 2px 0 #f7f5f4,
                 0 3px 0 #f7f5f4,
                 0 4px 0 #f7f5f4,
                 0 5px 0 #f7f5f4,
                 0 6px 0 #f7f5f4,
                 0 7px 0 #f7f5f4,
                 0 8px 0 #f7f5f4,
                 0 9px 0 #f7f5f4,
                 0 50px 25px rgba(0, 0, 0, .2);
  }
`;
export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  height: 100px;
`;

export const Letter = styled.span`
  position: relative;
  top: 20px;
  display: inline-block;
  animation: ${bounce} 0.3s ease infinite alternate;
  font-family: "HakgyoansimDunggeunmisoTTF-B", cursive;
  font-size: 50px;
  color: var(--primary-color-org);
  background-clip: text;
  text-fill-color: transparent;
  /* text-shadow: 0 1px 0 #f7f5f4, 0 2px 0 #f7f5f4, 0 3px 0 #f7f5f4,
    0 4px 0 #f7f5f4, 0 5px 0 #f7f5f4, 0 6px 0 transparent, 0 7px 0 transparent,
    0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4); */
`;
