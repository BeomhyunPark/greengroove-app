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

    expect(screen.getByRole('heading', { name: '홈 화면' })).toBeInTheDocument();
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
