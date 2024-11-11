import { Dayjs } from "dayjs";
import { SelectOption } from "./types";

export interface PostFormData {
  id?: string; // 게시글 ID (수정 시 필요)
  inputValue: string; // 제목
  content: string; // 내용
  selectedDate: Dayjs | null; // 모집 마감일
  participationMethod: SelectOption | null; // 진행 방식
  recruitmentCapacity: SelectOption | null; // 모집 인원
  interests: SelectOption[]; // 기술 스택 (다중 선택)
  position: SelectOption[]; // 모집 포지션
  duration: SelectOption | null; // 진행 기간
  created_at?: string; // 생성 시간
}

export interface PostFormMeetData {
  id?: string; // 게시글 ID (수정 시 필요)
  inputValue: string; // 제목
  content: string; // 내용
  participationMethod: SelectOption | null; // 선호 진행 방식
  affiliation: SelectOption | null; // 소속
  interests: SelectOption[]; // 관심 분야 (다중 선택)
  position: SelectOption[]; // 직무
  availableTime: SelectOption | null; // 참여 가능 시간
  created_at?: string; // 생성 시간
}

// 사용자 프로필 타입
export interface UserProfile {
  nickname: string; // 사용자 이름
  email: string; // 사용자 이메일
  profile_image_index: number; // 사용자 프로필 이미지 인덱스
}

// 게시글 상세 정보에 필요한 모든 필드 포함
export interface PostDetailData {
  id: string; // 게시글 ID
  type: string; // 게시글 타입 (프로젝트, 스터디, 모임)
  title: string; // 제목
  content: string; // 내용
  interests: string[]; // 기술 스택 (다중 선택)
  position: string[]; // 모집 포지션 (다중 선택)
  participation_method: string; // 진행 방식
  recruitment_capacity?: string; // 모집 인원 (프로젝트/스터디 타입)
  duration?: string; // 예상 기간 (프로젝트/스터디 타입)
  recruitment_deadline?: string; // 모집 마감일 (프로젝트/스터디 타입)
  affiliation?: string; // 소속 (모임 타입)
  available_time?: string; // 참여 가능 시간 (모임 타입)
  created_at: string; // 생성 시간
  updated_at?: string; // 수정 시간
  user_profile: UserProfile; // 사용자 프로필
}

// 상세 페이지 컴포넌트에 전달할 Props 타입
export interface PostDetailProps {
  postData: PostDetailData; // 게시글 데이터
  onEdit: () => void; // 수정 버튼 핸들러
  onDelete: () => void; // 삭제 버튼 핸들러
}
