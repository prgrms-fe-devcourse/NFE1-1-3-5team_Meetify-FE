export interface Chat {
  /** 채팅 메시지 내용 */
  msg: string;
  /** 해당 채팅이 그룹에서 마지막 메시지인지 구분,(시간 표시 유무 구분)*/
  isLastMsg: boolean;
  /** 해당 채팅을 읽었는지 구분 */
  isRead: boolean;
  /** 해당 메시지 보낸 시간 */
  creadtedAt: string;
}

export interface ChatRoomInfo {
  /** 채팅방 ID */
  roomId: string;
  /** 프로필 이미지 경로 */
  profileImageIndex: number;
  /** 타 유저 닉네임 */
  name: string;
  /** 타 유저 아이디 */
  otherUserId: string;
  /** 마지막에 온 메시지 */
  lastMsg?: string;
  /** 안 읽은 메시지 개수 */
  unReadMsgCnt?: number;
  /** 마지막 메시지 온 시간 */
  creadtedAt?: string;
}

export interface ServerChat {
  chat_id: string;
  room_id: string;
  sender: string;
  is_read: boolean;
  msg: string;
  created_at: string;
}

export interface ClientChat {
  senderId: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
}
