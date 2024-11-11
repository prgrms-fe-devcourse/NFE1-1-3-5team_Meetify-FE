import styled from "styled-components";

const ChatRoomWrapper = styled.div`
  min-width: 300px;
  width: 100%;
  min-height: 700px;
  max-height: 700px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--color-chat-bg);
  gap: 24px;
  border-radius: 16px;

  .chat--item {
    padding: 16px 16px 0px 16px;
    max-height: 800px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .chat--date--item {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .chat--day {
    display: flex;
    justify-content: center;
  }
  &.no--msg {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-white);
    border: 1px solid var(--color-chat-bg);

    font-size: var(--font-size-head-large);
    font-weight: var(--font-weight-bold);
  }
`;

export default ChatRoomWrapper;
