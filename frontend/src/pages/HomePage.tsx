import { Link } from 'react-router-dom';

import { PageMeta } from '../components/PageMeta';
import { publicProfile } from '../data/publicProfile';
import { projects } from '../data/projects';
import styles from './Page.module.css';

export function HomePage() {
  const featuredProject = projects[0];

  return (
    <div className={styles.home}>
      <PageMeta
        title="Backend developer · Portfolio note"
        description="Java와 Spring Boot를 중심으로 업무 시스템을 개발하고 운영한 백엔드 개발자의 프로젝트 기록입니다."
      />
      <section className={styles.hero} aria-labelledby="home-title">
        <p className={styles.overline}>Backend developer · Java &amp; Spring</p>
        <h1 id="home-title">
          <span>{publicProfile.headline}</span>
        </h1>
        <p className={styles.heroNote}>{publicProfile.focus}</p>
        <div className={styles.inlineLinks} aria-label="주요 링크">
          <Link to="/projects">Projects →</Link>
          <a
            href={publicProfile.links.github.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <section className={styles.about} id="about" aria-labelledby="about-title">
        <p className={styles.sectionNumber}>01</p>
        <div className={styles.sectionBody}>
          <h2 id="about-title">About</h2>
          <p className={styles.aboutCopy}>{publicProfile.introduction}</p>
        </div>
      </section>

      <section className={styles.featured} aria-labelledby="featured-title">
        <p className={styles.sectionNumber}>02</p>
        <div className={styles.sectionBody}>
          <div className={styles.sectionHeading}>
            <h2 id="featured-title">Selected project</h2>
            <Link to="/projects">All projects →</Link>
          </div>
          <Link className={styles.projectRow} to="/projects/greengroove">
            <div>
              <p className={styles.projectMeta}>개발 중 · 2026</p>
              <h3>{featuredProject.name}</h3>
              <p>{featuredProject.summary}</p>
            </div>
            <span className={styles.projectArrow} aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={styles.toolkit} aria-labelledby="toolkit-title">
        <p className={styles.sectionNumber}>03</p>
        <div className={styles.sectionBody}>
          <h2 id="toolkit-title">Toolkit</h2>
          <dl className={styles.toolkitList}>
            {publicProfile.skills.map((category) => (
              <div key={category.title}>
                <dt>{category.title}</dt>
                <dd>{category.skills.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
