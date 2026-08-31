import { Link, useParams } from 'react-router-dom';

import { PageMeta } from '../components/PageMeta';
import { findProject } from '../data/projects';
import styles from './Page.module.css';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = findProject(slug);

  if (!project) {
    return (
      <section className={styles.notFound} aria-labelledby="project-not-found-title">
        <PageMeta title="Project not found · Portfolio note" description="요청한 프로젝트를 찾지 못했습니다." />
        <p className={styles.notFoundMark} aria-hidden="true">?</p>
        <h1 id="project-not-found-title">프로젝트를 찾지 못했어요.</h1>
        <p>주소가 바뀌었거나 아직 공개하지 않은 프로젝트입니다.</p>
        <Link to="/projects">Projects로 돌아가기 →</Link>
      </section>
    );
  }

  return (
    <article className={styles.detailPage}>
      <PageMeta title={`${project.name} · Portfolio note`} description={project.summary} />
      <Link className={styles.backLink} to="/projects">← All projects</Link>

      <header className={styles.detailHeader}>
        <p className={styles.projectMeta}>{project.type} · {project.statusLabel}</p>
        <h1>{project.name}</h1>
        <p className={styles.detailSummary}>{project.summary}</p>
        <dl className={styles.detailMeta}>
          <div><dt>Period</dt><dd>{project.period}</dd></div>
          <div><dt>Status</dt><dd>{project.statusLabel}</dd></div>
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Stack</dt><dd>{project.technologies.join(' · ')}</dd></div>
        </dl>
      </header>

      <section className={styles.detailSection} aria-labelledby="problem-title">
        <p className={styles.sectionNumber}>01</p>
        <div>
          <h2 id="problem-title">왜 만들었나</h2>
          <p>{project.problem}</p>
        </div>
      </section>

      <section className={styles.detailSection} aria-labelledby="approach-title">
        <p className={styles.sectionNumber}>02</p>
        <div>
          <h2 id="approach-title">어떻게 풀었나</h2>
          <ul className={styles.proseList}>
            {project.approach.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className={styles.detailSection} aria-labelledby="decisions-title">
        <p className={styles.sectionNumber}>03</p>
        <div>
          <h2 id="decisions-title">주요 판단</h2>
          <ol className={styles.decisionList}>
            {project.decisions.map((decision, index) => (
              <li key={decision.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{decision.title}</h3>
                  <p>{decision.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.detailSection} aria-labelledby="progress-title">
        <p className={styles.sectionNumber}>04</p>
        <div>
          <h2 id="progress-title">현재 상태</h2>
          <ul className={styles.progressList}>
            {project.progress.map((item, index) => (
              <li key={item}>
                <span aria-hidden="true">{index === project.progress.length - 1 ? '○' : '●'}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className={styles.detailFooter}>
        <p>소스와 작업 기록은 GitHub에서 확인할 수 있습니다.</p>
        {project.links.map((link) => (
          <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>
            {link.label} ↗
          </a>
        ))}
      </footer>
    </article>
  );
}
