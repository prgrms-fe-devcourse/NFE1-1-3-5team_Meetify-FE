# 🤝 Meetify

<p align="center">
  <img src="./public/Meetify-Logo.svg" alt="Meetify Logo" width="300">
</p>

## 배포 주소

[meetify-team.vercel.app](https://meetify-team.vercel.app/)

## 백앤드 레포지토리

[meetify-backend](https://github.com/prgrms-fe-devcourse/NFE1-1-3-5team_Meetify-BE)

## 팀원 소개

| 유상훈(팀장)                        | 김우종                                  | 김혜수                                  | 박아영                                  | 안준우                                |
| ----------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | ------------------------------------- |
| [Yoos99](https://github.com/Yoos99) | [wilderif](https://github.com/wilderif) | [aaahyesu](https://github.com/aaahyesu) | [ayoung26](https://github.com/ayoung26) | [JW-Ahn0](https://github.com/JW-Ahn0) |

## 개발 기간

- 기획: 2024.10.17 ~ 2024.10.24
- 개발: 2024.10.25 ~ 2024.11.07

## 프로젝트 소개

Meetify는 프로젝트나 스터디를 함께할 팀원을 찾고, 자신의 역량과 관심사를 어필할 수 있는 매칭 플랫폼입니다.

### 기획 배경

- **기존 커뮤니케이션 채널의 한계 극복**

  - 오픈채팅, 이메일, 구글폼 등 분산된 연락 방식을 통합
  - 실시간 1:1 채팅으로 즉각적인 소통 가능

- **양방향 매칭 시스템 도입**
  - 프로젝트 주최자의 팀원 모집
  - 지원자의 역제안 서비스를 통한 효율적인 매칭

## 주요 구현 사항

### 1. 로그인 및 회원가입

- 모달 형태의 로그인/회원가입 UI
- 이메일 형식 및 비밀번호 유효성 검사
- 토스트 메시지를 통한 피드백 제공
- 로그인 상태 유지 기능

<details>
    <summary>로그인 미리보기</summary>
    <img src="./public/project_overview/1_1.gif" alt="login" width="700">
    
</details>

<details>
    <summary>회원가입 미리보기</summary>
    <img src="./public/project_overview/1_2.gif" alt="signup" width="700">
</details>

### 2. 게시글 CRUD

- 프로젝트, 스터디, Meet(매칭요청) 별 차별화된 폼 구현
- 모집 인원, 기간, 기술 스택 등 상세 정보 입력
- 텍스트 에디터 지원

<details>
    <summary>게시글 작성 미리보기</summary>
    <img src="./public/project_overview/2_1.gif" alt="post_create" width="700">
</details>

<details>
    <summary>게시글 수정 및 삭제 미리보기</summary>
    <img src="./public/project_overview/2_2.gif" alt="post_detail" width="700">
</details>

### 3. 검색 및 필터링

- 다중 필터 조건 지원 (기술 스택, 진행 방식 등)
- 키워드 검색 기능
- 페이지 페이지네이션 구현
- 새로운 게시글 표시 기능 구현
- 관심글 즐겨찾기 기능
- 관심글, 작성글 관리

<details>
    <summary>메인 검색 미리보기</summary>
    <img src="./public/project_overview/3_1.gif" alt="search" width="700">
</details>

<details>
    <summary>관심글 관리 미리보기</summary>
    <img src="./public/project_overview/3_2.gif" alt="my_post" width="700">
</details>

<details>
    <summary>작성글 관리 미리보기</summary>
    <img src="./public/project_overview/3_3.gif" alt="bookmark" width="700">
</details>

### 4. 실시간 채팅 시스템

- Socket.io를 활용한 실시간 양방향 통신
- 읽지 않은 메시지 관리 및 알림
- 채팅방 목록 관리 및 최근 메시지 표시

<details>
    <summary>실시간 채팅 미리보기</summary>
    <img src="./public/project_overview/4_1.gif" alt="chat" width="700">
</details>

### 5. 사용자 프로필 관리

- 기술 스택, 직무, 자기소개 등 사용자 정보 등록 및 수정

<details>
    <summary>사용자 프로필 관리 미리보기</summary>
    <img src="./public/project_overview/5_1.gif" alt="profile_update" width="700">
</details>

## 기술 스택

### 🚀 Front-end

### ✔️ 코어

<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">

### ✔️ 스타일

<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

### ✔️ 아이콘

<img src="https://img.shields.io/badge/React Icons-61DAFB?style=for-the-badge&logo=react&logoColor=black">

### ✔️ 컴포넌트

<img src="https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=Storybook&logoColor=white"/>

### ✔️ 상태 관리

<img src="https://img.shields.io/badge/zustand-orange?style=for-the-badge&logo=zustand&logoColor=white">

### ✔️ 라우팅

<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">

### ✔️ 채팅

<img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white">

### 🛠️ Back-end

### ✔️ 코어

<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/><img src="https://img.shields.io/badge/node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white"><img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">

### ✔️ 데이터베이스

<img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white"><img src="https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white">

### ✔️ 인증

<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white">

### ✔️ 채팅

<img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white">

### 🔧 Version Control & Collaboration

<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/><img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white"/>

<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"/><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/><img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>

<img src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white"/><img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"/>

## Database Schema

```mermaid
erDiagram
"UserProfile" {
  String _id PK
  String email UK
  String nickname
  Position position "nullable"
  Affiliation affiliation "nullable"
  Interest interests
  String bio "nullable"
  Int profile_image_index
  Post[] like_post
  DateTime created_at
  DateTime updated_at
}
"UserLogin" {
  String _id PK
  String email FK
  String password
  Boolean is_first_login
  DateTime last_logined_at "nullable"
  Int login_fail_count
}
"Post" {
  String _id PK
  PostType type
  String user_id FK
  String title
  String content
  Interest interests
  Position position
  ParticipationMethod participation_method
  DateTime created_at
  DateTime updated_at
  Int recruitment_capacity "nullable"
  Duration duration "nullable"
  DateTime recruitment_deadline "nullable"
  Affiliation affiliation "nullable"
  AvailableTime available_time "nullable"
}
"Chat" {
  String _id PK
  String room_id
  String sender FK
  String msg
  Boolean is_read "default: false"
  DateTime created_at
}
"ChatRoom" {
  String _id PK
  UserProfile[] user_list
}
"ChatUnread" {
  String _id PK
  String user_id FK
  String room_id FK
  Int unread_msg_count "default: 0"
}
"UserUnread" {
  String _id PK
  String user_id FK
  Int unread_msg_count "default: 0"
}

%% Relationships
"UserLogin" |o--|| "UserProfile" : user_profile
"Post" }o--|| "UserProfile" : user_profile
"Chat" }o--|| "UserProfile" : sender
"Chat" }o--|| "ChatRoom" : room
"ChatUnread" }o--|| "UserProfile" : user
"ChatUnread" }o--|| "ChatRoom" : room
"UserUnread" }o--|| "UserProfile" : user

%% Enum Relationships
"UserProfile" }o--|| "Position" : has
"UserProfile" }o--|| "Affiliation" : has
"Post" }o--|| "PostType" : has
"Post" }o--|| "ParticipationMethod" : has
"Post" }o--|| "Duration" : has
"Post" }o--|| "AvailableTime" : has
"Post" }o--|| "Position" : has
"Post" }o--|| "Affiliation" : has
```

## 설치 및 실행

1. 레포지토리 클론
   ```bash
   git clone https://github.com/prgrms-fe-devcourse/NFE1-1-3-5team_Meetify-FE
   ```
2. 패키지 설치
   ```bash
   npm install
   ```
3. 환경 변수 설정
   프로젝트 루트에 `.env` 파일을 생성하고, 아래와 같이 설정
   ```bash
   VITE_API_URL = https://your-server-url.com/api
   ```
4. 프로젝트 실행
   ```bash
   npm run dev
   ```

## 테스트 계정

- 이메일: `meetify@naver.com`
- 비밀번호: `qwaszx12!@`

## 회고

<details>
    <summary>유상훈</summary>
    <p>
        다 같이 협력하여 무사히 프로젝트를 끝냈다는 게 감격스럽습니다 🙌 <br/>우여곡절도 많았지만 그만큼 배워가는 것도 많은 시간이었습니다 😊
    </p>
</details>

<details>
    <summary>김우종</summary>
    <p>
        설계와 백앤드, 프론트앤드 개발 그리고 배포까지 개발 과정 전반에 대한 경험을 두루 할 수 있어서 유익했습니다.<br/>협업 과정에 대해 많이 배우고 경험할 수 있어서 좋았습니다.
    </p>
</details>

<details>
    <summary>김혜수</summary>
    <p>
        팀원들과 기획부터 설계까지 끊임없이 소통하고 수정하면서 협력이란 무엇인가를 느낄 수 있었고,<br/> 하나의 기능씩 분산하여 프론트엔드-백엔드 구현을 진행하다보니 전체적인 개발 흐름을 이해할 수 있었던 것 같아 많은 것을 배운 프로젝트였습니다! 😊
    </p>
</details>

<details>
    <summary>박아영</summary>
    <p>
        이번 프로젝트로 협업의 중요성과 서버~클라이언트 개발흐름을 이해하면서 지식을 넓힐 수 있었습니다! <br/>팀원분들과 원활하게 소통하며 프로젝트를 완만하게 마무리하게 된 것 같아 만족스러워요 😊
    </p>
</details>

<details>
    <summary>안준우</summary>
    <p>
        협업을 본격적으로 하면서 진행하면서 소통에 큰 불화 없이 잘 진행된 것 같아 좋았습니다. <br/> 채팅을 한번 만들어보고 싶었는데 100%는 아니지만 그래도 어느 정도 목표를 달성한 것 같아 좋았습니다.
    </p>
</details>
