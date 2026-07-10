import styles from './Page.module.css';

export function ProjectsPage() {
  return (
    <section className={styles.section} aria-labelledby="projects-title">
      <p className={styles.kicker}>프로젝트 목록</p>
      <h1 id="projects-title">프로젝트 목록 화면</h1>
      <p className={styles.description}>
        공개 프로젝트를 목록으로 제공할 화면입니다. 실제 프로젝트 카드와 상세
        데이터는 이후 작업에서 추가합니다.
      </p>
    </section>
  );
}
