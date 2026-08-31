import { Link } from 'react-router-dom';

import { PageMeta } from '../components/PageMeta';
import { projects } from '../data/projects';
import styles from './Page.module.css';

export function ProjectsPage() {
  return (
    <div className={styles.indexPage}>
      <PageMeta
        title="Projects · Portfolio note"
        description="프로젝트의 목적, 기여, 기술적 판단과 현재 상태를 정리한 개발 기록입니다."
      />
      <header className={styles.pageHeader}>
        <p className={styles.overline}>Projects</p>
        <h1>만든 것과<br />생각한 것.</h1>
        <p>
          결과물만 나열하기보다 문제, 기여, 판단과 현재 상태를 함께
          정리했습니다.
        </p>
      </header>

      <section className={styles.projectIndex} aria-label="프로젝트 목록">
        {projects.map((project, index) => (
          <Link
            className={styles.indexRow}
            to={`/projects/${project.slug}`}
            key={project.slug}
          >
            <span className={styles.indexNumber}>{String(index + 1).padStart(2, '0')}</span>
            <div className={styles.indexContent}>
              <div className={styles.indexTitleLine}>
                <h2>{project.name}</h2>
                <span>{project.statusLabel}</span>
              </div>
              <p>{project.summary}</p>
              <dl className={styles.indexMeta}>
                <div>
                  <dt>Period</dt>
                  <dd>{project.period}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>{project.technologies.slice(0, 4).join(' · ')}</dd>
                </div>
              </dl>
            </div>
            <span className={styles.indexArrow} aria-hidden="true">↗</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
