export type ProjectStatus = 'DEVELOPING' | 'DEPLOYED' | 'IN_USE' | 'COMPLETED' | 'ARCHIVED';

export type Project = {
  slug: string;
  name: string;
  summary: string;
  status: ProjectStatus;
  statusLabel: string;
  period: string;
  type: string;
  role: string;
  technologies: string[];
  problem: string;
  approach: string[];
  decisions: Array<{ title: string; description: string }>;
  progress: string[];
  links: Array<{ label: string; href: string }>;
};

export const projects: Project[] = [
  {
    slug: 'greengroove',
    name: 'GreenGroove',
    summary:
      '개발자의 경력과 기술, 프로젝트의 맥락을 면접관에게 명확하게 전달하기 위한 공개 포트폴리오',
    status: 'DEVELOPING',
    statusLabel: '개발 중',
    period: '2026.07 — 진행 중',
    type: '개인 프로젝트',
    role: '요구사항 정의 · 정보 구조 설계 · 프론트엔드 구현',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'CSS Modules',
      'Vitest',
    ],
    problem:
      '이력서나 GitHub 저장소만으로는 프로젝트를 왜 만들었는지, 어떤 판단을 내렸는지, 현재 어디까지 진행됐는지를 짧은 시간 안에 전달하기 어렵습니다. 면접관이 핵심 맥락을 빠르게 파악하고 질문을 이어갈 수 있는 정보 구조가 필요했습니다.',
    approach: [
      '프로젝트의 목적, 기여, 기술적 의사결정, 진척도를 하나의 읽기 흐름으로 정리합니다.',
      '현재 상태를 개발 중, 배포 후 검증 중, 실제 사용 중으로 명확하게 구분합니다.',
      '제품을 포장하는 랜딩페이지보다 개발 기록을 읽는 개인 문서에 가까운 형태로 구성합니다.',
    ],
    decisions: [
      {
        title: '정적 데이터로 MVP 시작',
        description:
          '관리자 화면과 데이터베이스는 초기 공개에 필요하지 않다고 판단했습니다. 먼저 콘텐츠 품질과 읽기 흐름을 검증하고, 운영 필요가 생기면 관리 기능을 추가하는 순서로 정했습니다.',
      },
      {
        title: '세 화면을 하나의 데이터 구조로 연결',
        description:
          '홈의 대표 프로젝트, 목록, 상세가 같은 프로젝트 데이터를 바라보게 해 상태와 기술 표현이 서로 어긋나지 않도록 합니다.',
      },
      {
        title: '장식보다 타이포그래피',
        description:
          '우선순위를 카드나 애니메이션으로 만들지 않고 글자 크기, 문단 폭, 여백과 구분선으로 표현합니다. 포인트 색은 링크와 작은 표식에만 사용합니다.',
      },
    ],
    progress: [
      '요구사항과 공개 정보 범위 문서화',
      '공통 레이아웃과 홈·목록·상세 라우팅 구축',
      '개인 블로그형 반응형 화면 구현',
      '테스트·린트·프로덕션 빌드 검증',
      '배포와 실제 콘텐츠 확장 준비 중',
    ],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/BeomhyunPark/greengroove-app',
      },
    ],
  },
];

export function findProject(slug?: string) {
  return projects.find((project) => project.slug === slug);
}
