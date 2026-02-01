# Tailwind CSS Mastery: Portfolio to Admin

## Created on

2026년 02월 01일

이 리포지토리는  
**인프런: Tailwind CSS 완벽 마스터 (짐코딩)** 강의를 기반으로,  
기초 문법부터 Next.js 15 프로젝트 적용, 그리고 실전 프로젝트(포트폴리오, 어드민) UI 제작까지의 과정을 기록하는 학습 공간입니다.

> 목표:
>
> - **Tailwind CSS v4의 `@theme` 시스템과 설계를 완벽히 이해하고 활용하기 ⭕**

---

## 📌 학습 목적

- Utility-first CSS 프레임워크의 철학 이해 및 실습
- 디자인 시스템(Color, Spacing, Typography) 커스터마이징 능력 확보
- Next.js 15 환경에서 최적화된 Tailwind v4 설정 및 운영 방식 숙달
- 반응형 디자인 및 다크모드 구현 패턴의 정석 학습

---

## 🗓️ 학습 방식

- **강의 실습**: 섹션별 이론 학습 후 해당 디렉토리에 코드 작성
- **Next.js 이식**: CDN 방식의 실습 내용을 Next.js 15 프로젝트 구조로 수동 변환 및 적용
- **컴포넌트화**: 단순 HTML 작성을 넘어 React 컴포넌트 단위로 UI 추상화

---

## 📁 디렉토리 구조

```text
./
├── 01-getting-started/     # 강의 소개, CDN 실습 및 환경 설정
├── 02-basics/              # Typography, Color, Spacing 기초
├── 03-layout/              # Container, Flex, Grid, Position
├── 04-responsive/          # 반응형 디자인 (Breakpoints)
├── 05-animation/           # Transition & Animation
├── 06-dark-mode/           # 다크모드 전략 및 설정
├── 07-portfolio-site/      # [Project] 포트폴리오 사이트 (Next.js App Router)
├── 08-admin-site/          # [Project] 어드민 대시보드 (Table, Sidebar 등)
├── 09-deployment/          # Github Pages 및 Vercel 배포 기록
└── README.md

---

## 🧠 학습 목차 (강의 섹션 기준)

### 1️⃣ 시작하기 & 기초 환경
- Tailwind CSS v4 CDN 설치 및 테스트
- `@theme` 블록을 이용한 커스텀 컬러 및 테마 설정
- VSCode Snippets 및 Extension 최적화

📁 `01-getting-started/`

---

### 2️⃣ 핵심 스타일링 시스템
- **Typography**: Font size, Weight, Line-height 제어
- **Box Model**: Margin, Padding, Spacing 시스템 이해
- **Layout**: Flexbox와 Grid를 활용한 레이아웃 구성 방법
- **Position**: Relative, Absolute, Sticky의 실전 활용

📁 `02-basics/`, `03-layout/`

---

### 3️⃣ 반응형 및 동적 효과
- **Responsive**: 모바일 퍼스트 중단점(Breakpoints) 적용
- **Animation**: UI 경험을 높이는 Transition 및 Animation 효과
- **Dark Mode**: 시스템 테마 감지 및 수동 토글 기능 구현

📁 `04-responsive/` ~ `06-dark-mode/`

---

### 4️⃣ 실전 프로젝트 적용 (Portfolio & Admin)
- Next.js 15 환경에서 프로젝트 셋팅 및 최적화
- 컴포넌트 기반 UI 설계 (Header, Hero, Skills, Contact, Footer)
- 데이터 중심의 Table UI 및 Sidebar 대시보드 레이아웃 구축

📁 `07-portfolio-site/`, `08-admin-site/`

---

## 🚀 실습 적용 기준
- **v4 표준 준수**: `tailwind.config.js` 없이 CSS 내 `@theme`으로 모든 설정 관리
- **Next.js 15 연동**: `create-next-app` 이후 수동으로 Tailwind v4 환경 구축 습득
- **가독성 유지**: 클래스 중복이 심할 경우 적절한 컴포넌트 분리 및 `@apply` 활용
- **Any-Free**: (TypeScript 병행 시) 모든 Props와 Style 상태에 정확한 타입 정의

---

## ✍️ 메모
- **Next.js 15 환경 설정 체크리스트**:
  1. `npm install tailwindcss @tailwindcss/postcss postcss`
  2. `postcss.config.mjs` 파일 내 플러그인 등록
  3. `globals.css` 상단 `@import "tailwindcss";` 확인
- **학습 팁**: 강의의 CDN 코드를 React/Next.js의 `className` 문법으로 즉시 변환하는 연습 병행

---

## ✅ 최종 목표
> 별도의 CSS 파일 없이 Tailwind 만으로 복잡한 실무 UI를 빠르게 구현하는 상태 만들기
```
