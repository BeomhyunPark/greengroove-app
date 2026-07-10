# GreenGroove

GreenGroove는 공개 포트폴리오 MVP를 만들기 위한 저장소입니다. 면접관과 채용 담당자가 개발자의 기본 정보, 기술 경험, 프로젝트를 확인할 수 있는 공개 화면을 목표로 합니다.

## 현재 구현 범위

이번 단계에서는 포트폴리오 화면 개발을 위한 프론트엔드 기반과 공통 화면 구조를 구성했습니다.

* React, TypeScript, Vite 기반 프론트엔드 프로젝트
* 홈, 프로젝트 목록, 프로젝트 상세, 찾을 수 없는 화면 라우팅
* 공통 헤더, 내비게이션, 본문 영역, 푸터
* CSS 변수와 기본 전역 스타일
* Vitest와 React Testing Library 기반 테스트 환경

실제 개발자 소개, 경력 정보, 기술 스택, 프로젝트 카드, 프로젝트 상세 콘텐츠는 아직 구현하지 않았습니다.

## 프론트엔드 위치

프론트엔드 코드는 `frontend` 디렉터리에 있습니다.

```bash
cd frontend
```

## 사전 요구사항

* Node.js
* pnpm

## 의존성 설치

```bash
pnpm install
```

## 개발 서버 실행

```bash
pnpm dev
```

Vite 개발 서버가 출력하는 로컬 주소로 접속합니다.

## 테스트

```bash
pnpm test
```

테스트는 비대화형 실행을 위해 watch 모드가 아닌 단일 실행으로 동작합니다.

## 린트

```bash
pnpm lint
```

## 프로덕션 빌드

```bash
pnpm build
```
