import { Link, useParams } from 'react-router-dom';

import styles from './Page.module.css';

export function ProjectDetailPage() {
  const { slug } = useParams();

  return (
    <section className={styles.section} aria-labelledby="project-detail-title">
      <p className={styles.kicker}>프로젝트 상세</p>
      <h1 id="project-detail-title">프로젝트 상세 화면</h1>
      <p className={styles.description}>
        <strong>{slug}</strong> 경로의 상세 정보를 표시할 화면입니다. 실제 상세
        콘텐츠는 이번 범위에 포함하지 않습니다.
      </p>
      <Link className={styles.textLink} to="/projects">
        프로젝트 목록으로 이동
      </Link>
    </section>
  );
}
