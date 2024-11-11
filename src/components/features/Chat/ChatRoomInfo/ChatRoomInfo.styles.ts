import styled from "styled-components";

const ChatRoomInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  border-radius: 16px;

  padding: 10px;

  &:hover {
    background-color: var(--bg-gray-light);
  }
  cursor: pointer;

  .profile--and--msg {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }

  .profile--and--msg img {
    width: 50px;
    height: 50px;
  }
  .name--and--msg {
    display: flex;
    flex-direction: column;
    gap: 4px;

    span {
      max-width: 160px;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
    }
  }
  .time--and--cnt {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 12px;
    gap: 8px;
  }

  &.active {
    background-color: var(--bg-gray-light);
  }
`;

export default ChatRoomInfoWrapper;
