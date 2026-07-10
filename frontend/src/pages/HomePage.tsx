import styles from './Page.module.css';

export function HomePage() {
  return (
    <section className={styles.section} aria-labelledby="home-title">
      <p className={styles.kicker}>공개 포트폴리오 MVP</p>
      <h1 id="home-title">홈 화면</h1>
      <p className={styles.description}>
        개발자 소개와 대표 프로젝트를 표시할 첫 화면입니다. 이번 작업에서는
        공통 레이아웃과 경로 동작만 확인합니다.
      </p>
    </section>
  );
}
