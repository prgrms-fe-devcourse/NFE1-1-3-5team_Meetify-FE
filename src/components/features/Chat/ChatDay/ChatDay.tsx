import { convertDate2Str } from "../../../../utils/dateUtils";
import ChatDayWarpper from "./ChatDay.styles";

interface ChatDayProps {
  /** 채팅 날짜 */
  date: string;
}
const ChatDay = ({ date }: ChatDayProps) => {
  //Date - > 'XXXX년XX월XX일(X) 형식으로 변환
  const formattedDate = convertDate2Str(date);

  return <ChatDayWarpper>{formattedDate}</ChatDayWarpper>;
};

export default ChatDay;
