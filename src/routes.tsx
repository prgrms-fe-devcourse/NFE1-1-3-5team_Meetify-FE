import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import MainPage from "./pages/MainPage/MainPage";
import MyInfoPage from "./pages/MyInfoPage/MyInfoPage/MyInfoPage";
import MyInfoEditPage from "./pages/MyInfoPage/MyInfoEditPage/MyInfoEditPage";
import MyLikePage from "./pages/MyLikePage/MyLikePage";
import MyPostsPage from "./pages/MyPostPage/MyPostsPage";
import PostPage from "./pages/PostPage/PostPage";
import CreateLayout from "./pages/PostCreatePage/CreateLayout";
import CreateMeetPage from "./pages/PostCreatePage/CreateMeetPage";
import CreateProjectPage from "./pages/PostCreatePage/CreateProjectPage";
import CreateStudyPage from "./pages/PostCreatePage/CreateStudyPage";
import UpdateLayout from "./pages/PostUpdatePage/UpdateLayout";
import UpdateMeetPage from "./pages/PostUpdatePage/UpdateMeetPage";
import UpdateProjectPage from "./pages/PostUpdatePage/UpdateProjectPage";
import UpdateStudyPage from "./pages/PostUpdatePage/UpdateStudyPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage"; // 에러 페이지
import ChatsPage from "./pages/ChatsPage/ChatsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, // 에러 페이지 설정
    children: [
      { index: true, element: <MainPage /> }, // 메인 페이지

      // 마이페이지
      {
        path: "my-info",
        element: <MyInfoPage />,
      },

      // 수정 페이지
      {
        path: "my-info/edit",
        element: <MyInfoEditPage />,
      },

      // 관심글 페이지
      {
        path: "my-like",
        element: <MyLikePage />,
      },

      // 작성글 페이지
      {
        path: "my-posts",
        element: <MyPostsPage />,
      },

      // 포스트 관련 라우트
      {
        path: "post/:postId",
        element: <PostPage />,
      },

      // 포스트 작성 관련 라우트
      {
        path: "post/create",
        element: <CreateLayout />,
        children: [
          { path: "project", element: <CreateProjectPage /> },
          { path: "study", element: <CreateStudyPage /> },
          { path: "meet", element: <CreateMeetPage /> },
        ],
      },

      // 포스트 업데이트 관련 라우트
      // 업데이트할 때 id를 어떻게 사용해야하는지 애매해서 상훈님 구현하시면서 수정하시면 되겠습니다.
      // post/udate/:postId로 수정한 뒤 컴포넌트 내부에서 type에 따라 UI가 달라지셔도 될 것 같습니다.
      {
        path: "post/update",
        element: <UpdateLayout />,
        children: [
          { path: "meet/:postId", element: <UpdateMeetPage /> },
          { path: "project/:postId", element: <UpdateProjectPage /> },
          { path: "study/:postId", element: <UpdateStudyPage /> },
        ],
      },

      // 채팅 페이지 // 채팅 부분은 어떻게 구현될지 몰라서 우선 이렇게 남겼습니다.
      {
        path: "chats",
        element: <ChatsPage />,
        children: [{ path: ":userId", element: <ChatsPage /> }],
      },
    ],
  },
]);

export default routes;
