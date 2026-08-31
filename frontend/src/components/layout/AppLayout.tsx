import { NavLink, Outlet } from 'react-router-dom';

import styles from './AppLayout.module.css';

export function AppLayout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <NavLink className={styles.brand} to="/" aria-label="포트폴리오 홈">
            <span>dev.note</span>
            <span className={styles.brandDot} aria-hidden="true">●</span>
          </NavLink>
          <nav className={styles.nav} aria-label="주요 화면">
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <a className={styles.navLink} href="/#about">About</a>
            <a
              className={styles.navLink}
              href="https://github.com/BeomhyunPark"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>조금씩, 꾸준히 다듬는 중.</span>
          <span>Last updated · 2026.09</span>
        </div>
      </footer>
    </div>
  );
}
