export interface PostListReqParams {
  // Post ID
  postId?: string;
  // 페이지 번호
  page?: number;
  // 페이지당 게시글 수
  limit?: number;
  // 검색어
  searchTerm?: string;
  // 게시글 타입 (탭 구분)
  postType?: string;
  // 기술 스택
  interests?: string[];
  // 포지션
  position?: string;
  // 진행 방식
  participationMethod?: string;
  // 로그인 ID
  loginId?: string;
  // 게시물 ID 리스트
  postIds?: string[];
}

export interface PostListResParams {
  // Post ID
  id: string;
  // 게시글 타입
  type: string;
  // 작성자 ID
  user_id: string;
  // 게시글 제목
  title: string;
  // 게시글 내용
  content: string;
  // 기술 스택
  interests: string[];
  // 포지션
  position: string[];
  // 진행 방식
  participation_method: string;
  // 작성일
  created_at: Date;
  // 모집 인원
  recruitment_capacity?: number | null;
  // 예상 기간
  duration?: string | null;
  // 모집 마감일
  recruitment_deadline?: Date | null;
  // 소속
  affiliation?: string | null;
  // 가능한 시간대
  available_time?: string | null;
  // 관심글 여부
  isLiked?: boolean;
  // 사용자 닉네임
  user_profile: {
    nickname: string;
    profile_image_index: number;
  };
}
