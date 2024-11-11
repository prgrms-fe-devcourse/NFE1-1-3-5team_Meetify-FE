import styled from "styled-components";

const ChatMsgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 4px;

  .msg {
    display: inline-block;
    border-radius: 16px;
    padding: 8px 12px;
    max-width: 200px;
    word-break: break-word;
  }

  .my {
    background-color: var(--color-chat-orange);
    color: var(--color-white);
  }
  .other {
    order: -1;
    background-color: #ffffff;
  }

  /* other 인 경우 위치 조정*/
  &.other {
    transform: translate(45px, -15px);
  }

  .time {
    font-size: 8px;
    color: var(--color-chat-gray);
  }
  .msg--info--con {
    display: flex;
    flex-direction: column;
  }

  .not--read::before {
    content: "1";
    font-size: 12px;
    color: var(--color-chat-yellow);
  }

  .text--end {
    text-align: end;
  }
  .text--start {
    text-align: start;
  }
`;

export default ChatMsgWrapper;
