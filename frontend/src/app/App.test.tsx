import { render, screen } from '@testing-library/react';
import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { routes } from './router';

function renderRoute(initialEntry: string) {
  const router = createMemoryRouter(routes, {
    initialEntries: [initialEntry],
  });

  return render(<RouterProvider router={router} />);
}

describe('공개 포트폴리오 화면', () => {
  it('개인정보 없이 공통 레이아웃과 내비게이션을 표시한다', () => {
    renderRoute('/');

    expect(screen.getByRole('link', { name: '포트폴리오 홈' })).toHaveAttribute(
      'href',
      '/',
    );
    expect(screen.getByRole('navigation', { name: '주요 화면' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute(
      'href',
      '/projects',
    );
    expect(screen.getByText('dev.note')).toBeInTheDocument();
  });

  it('홈에서 업무 방식, 대표 프로젝트와 기술을 표시한다', () => {
    renderRoute('/');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: '요구사항을 실제로 동작하는 서비스로 만듭니다.',
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'About' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Selected project' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'GreenGroove' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Toolkit' })).toBeInTheDocument();
    expect(screen.getByText(/Java · Spring Boot · MyBatis/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects →' })).toHaveAttribute(
      'href',
      '/projects',
    );
  });

  it('프로젝트 목록에 목적과 현재 상태를 표시한다', () => {
    renderRoute('/projects');

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '만든 것과생각한 것.',
    );
    expect(screen.getByRole('heading', { level: 2, name: 'GreenGroove' })).toBeInTheDocument();
    expect(screen.getByText('개발 중')).toBeInTheDocument();
    expect(screen.getByText('2026.07 — 진행 중')).toBeInTheDocument();
  });

  it('프로젝트 상세에서 목적, 판단과 진척도를 표시한다', () => {
    renderRoute('/projects/greengroove');

    expect(screen.getByRole('heading', { level: 1, name: 'GreenGroove' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '왜 만들었나' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '주요 판단' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '현재 상태' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub repository ↗' })).toHaveAttribute(
      'href',
      'https://github.com/BeomhyunPark/greengroove-app',
    );
  });

  it('잘못된 경로를 안내한다', () => {
    renderRoute('/missing');

    expect(
      screen.getByRole('heading', { name: '여기엔 아직 아무것도 없어요.' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '홈으로 돌아가기 →' })).toHaveAttribute(
      'href',
      '/',
    );
  });
});
