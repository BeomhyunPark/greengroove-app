import { NavLink, Outlet } from 'react-router-dom';

import styles from './AppLayout.module.css';

export function AppLayout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <NavLink className={styles.brand} to="/" aria-label="GreenGroove 홈">
            GreenGroove
          </NavLink>
          <nav className={styles.nav} aria-label="주요 화면">
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              to="/"
            >
              홈
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              to="/projects"
            >
              프로젝트
            </NavLink>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>GreenGroove 공개 포트폴리오</span>
        </div>
      </footer>
    </div>
  );
}
