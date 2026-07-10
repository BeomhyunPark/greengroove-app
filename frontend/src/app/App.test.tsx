import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { routes } from './router';

function renderRoute(initialEntry: string) {
  const router = createMemoryRouter(routes, {
    initialEntries: [initialEntry],
  });

  return render(<RouterProvider router={router} />);
}

describe('공통 화면과 라우팅', () => {
  it('공통 레이아웃과 내비게이션 링크를 표시한다', () => {
    renderRoute('/');

    expect(
      screen.getByRole('link', { name: 'GreenGroove 홈' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: '주요 화면' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '홈' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: '프로젝트' })).toHaveAttribute(
      'href',
      '/projects',
    );
    expect(screen.getByText('GreenGroove 공개 포트폴리오')).toBeInTheDocument();
  });

  it('홈 경로 화면을 표시한다', () => {
    renderRoute('/');

    expect(
      screen.getByRole('heading', { level: 1, name: '박범현' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('SI 환경에서 업무 시스템 개발과 운영을 경험한 백엔드 웹개발자'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Java와 Spring Boot를 중심으로 업무 시스템을 개발하는 백엔드 웹개발자입니다/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: '기술 스택' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Backend' })).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('Spring Boot')).toBeInTheDocument();
    expect(screen.getByText('MyBatis')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Database' })).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    expect(screen.getByText('MariaDB')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Frontend' })).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'Infrastructure' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('Linux')).toBeInTheDocument();
    expect(screen.getByText('GitHub Actions')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'GreenGroove' }),
    ).toBeInTheDocument();
    expect(screen.getByText('현재 개발 중')).toBeInTheDocument();
    expect(screen.getByText('React, TypeScript')).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: '프로젝트 목록 보기' })[0],
    ).toHaveAttribute('href', '/projects');
    expect(screen.getAllByRole('link', { name: 'GitHub' })[0]).toHaveAttribute(
      'href',
      'https://github.com/BeomhyunPark',
    );
    expect(screen.queryByRole('link', { name: '이력서' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: '이메일' })).not.toBeInTheDocument();
  });

  it('프로젝트 목록 경로 화면을 표시한다', () => {
    renderRoute('/projects');

    expect(
      screen.getByRole('heading', { name: '프로젝트 목록 화면' }),
    ).toBeInTheDocument();
  });

  it('프로젝트 상세 경로 화면을 표시한다', () => {
    renderRoute('/projects/greengroove');

    expect(
      screen.getByRole('heading', { name: '프로젝트 상세 화면' }),
    ).toBeInTheDocument();
    expect(screen.getByText('greengroove')).toBeInTheDocument();
  });

  it('잘못된 경로 안내를 표시한다', () => {
    renderRoute('/missing');

    expect(
      screen.getByRole('heading', { name: '찾을 수 없는 화면' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '홈으로 이동' })).toHaveAttribute(
      'href',
      '/',
    );
  });
});
