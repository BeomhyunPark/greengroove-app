export type SkillCategory = {
  title: 'Backend' | 'Database' | 'Frontend' | 'Infrastructure';
  skills: string[];
};

export type ProfileLink = {
  label: string;
  href?: string;
};

export type FeaturedProject = {
  name: string;
  description: string;
  status: string;
  technologies: string[];
};

export type PublicProfile = {
  name: string;
  headline: string;
  introduction: string;
  skills: SkillCategory[];
  links: {
    github: ProfileLink;
    resume: ProfileLink;
    email: ProfileLink;
  };
  featuredProject: FeaturedProject;
};

export const publicProfile: PublicProfile = {
  name: '박범현',
  headline: '개발과 운영을 경험한 백엔드 웹개발자',
  introduction:
    'Java와 Spring Boot를 중심으로 업무 시스템을 개발하는 백엔드 웹개발자입니다.',
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
    resume: {
      label: '이력서',
    },
    email: {
      label: '이메일',
    },
  },
  featuredProject: {
    name: 'GreenGroove',
    // description:
    //   '',
    status: '현재 개발 중',
    technologies: ['React', 'TypeScript'],
  },
};
