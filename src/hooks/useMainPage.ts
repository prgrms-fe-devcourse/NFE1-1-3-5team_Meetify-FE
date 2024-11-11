import { useState, useEffect } from "react";
import { getPostList } from "../services/postService";
import { PostListReqParams, PostListResParams } from "../types/PostList";
import { SelectOption } from "../types/types";
import useAuthStore from "./../store/useAuthStore";
import useLoadingStore from "./../store/useLoadingStore";

interface UseMainPageReturn {
  postList: PostListResParams[] | null;
  currentPage: number;
  totalPage: number;
  handleTabChange: (type: string) => void;
  handleSearch: (value: string) => void;
  handleSelectChange: (
    option: SelectOption | SelectOption[],
    type: string
  ) => void;
  handlePageChange: (page: number) => void;
  selectPostType: string;
  isLoading: boolean;
}

// TODO 전역으로 변경
// 포스트 최대 표시 개수 정의
const MAX_POST_DISPLAY = 8;

const useMainPage = (): UseMainPageReturn => {
  const { isLogin, email } = useAuthStore();
  const { isLoading, setLoading } = useLoadingStore();
  const [postList, setPostList] = useState<PostListResParams[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectPostType, setSelectPostType] = useState("ALL");
  const [selectInterests, setSelectInterests] = useState<string[]>([]);
  const [selectPosition, setSelectPosition] = useState<string>("");
  const [selectParticipation, setSelectParticipation] = useState<string>("");

  useEffect(() => {
    const fetchPostList = async () => {
      setLoading(true);
      const params: PostListReqParams = {
        page: currentPage,
        limit: MAX_POST_DISPLAY,
        searchTerm: searchTerm,
        postType: selectPostType,
        interests: selectInterests.map((option) => option),
        position: selectPosition,
        participationMethod: selectParticipation,
      };
      // 로그인한 경우에 사용자 아이디 추가
      if (isLogin && email) params.loginId = email;

      try {
        const response = await getPostList(params);
        setTotalPage(response.data.totalPage);
        setPostList(response.data.postList);
      } catch (error) {
        console.error("API 요청 중 에러 발생 :: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostList();
  }, [
    currentPage,
    searchTerm,
    selectPostType,
    selectInterests,
    selectPosition,
    selectParticipation,
    isLogin,
    email,
    setLoading,
  ]);

  const handleTabChange = (type: string) => {
    setSelectPostType(type);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleSelectChange = (
    option: SelectOption | SelectOption[],
    type: string
  ) => {
    if (type === "interests") {
      const Interests = Array.isArray(option)
        ? option.map((opt) => opt.value as string)
        : [option.value as string];
      setSelectInterests(Interests);
    } else if (type === "position") {
      setSelectPosition((option as SelectOption).value as string);
    } else if (type === "participationMethod") {
      setSelectParticipation((option as SelectOption).value as string);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    postList,
    currentPage,
    totalPage,
    handleTabChange,
    handleSearch,
    handleSelectChange,
    handlePageChange,
    selectPostType,
    isLoading,
  };
};

export default useMainPage;
