export type SkillCategory = {
  title: 'Backend' | 'Database' | 'Frontend' | 'Infrastructure';
  skills: string[];
};

export type ProfileLink = {
  label: string;
  href?: string;
};

export type PublicProfile = {
  headline: string;
  introduction: string;
  focus: string;
  skills: SkillCategory[];
  links: {
    github: ProfileLink;
  };
};

export const publicProfile: PublicProfile = {
  headline: '요구사항을 실제로 동작하는 서비스로 만듭니다.',
  introduction:
    'Java와 Spring Boot를 중심으로 업무 시스템을 개발하고 운영해 왔습니다. 요구사항을 API와 데이터 모델로 구체화하고, 검증 가능한 결과물로 연결하는 과정에 집중합니다.',
  focus: '개발과 운영을 함께 경험한 백엔드 웹개발자',
  skills: [
    {
      title: 'Backend',
      skills: ['Java', 'Spring Boot', 'MyBatis'],
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MariaDB'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript'],
    },
    {
      title: 'Infrastructure',
      skills: ['Docker', 'Linux', 'GitHub Actions'],
    },
  ],
  links: {
    github: {
      label: 'GitHub',
      href: 'https://github.com/BeomhyunPark',
    },
  },
};
