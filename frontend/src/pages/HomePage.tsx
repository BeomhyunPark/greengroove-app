import { Link } from 'react-router-dom';

import { publicProfile } from '../data/publicProfile';
import styles from './Page.module.css';

export function HomePage() {
  const visibleExternalLinks = [
    publicProfile.links.github,
    publicProfile.links.resume,
    publicProfile.links.email,
  ].filter((link) => link.href);

  return (
    <div className={styles.home}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroContent}>
          <p className={styles.kicker}>공개 포트폴리오</p>
          <h1 id="home-title">{publicProfile.name}</h1>
          <p className={styles.headline}>{publicProfile.headline}</p>
          <p className={styles.description}>{publicProfile.introduction}</p>
          <div className={styles.actions} aria-label="주요 링크">
            <Link className={styles.primaryAction} to="/projects">
              프로젝트 목록 보기
            </Link>
            <a
              className={styles.secondaryAction}
              href={publicProfile.links.github.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className={styles.contentSection} aria-labelledby="skills-title">
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>주요 기술</p>
          <h2 id="skills-title">기술 스택</h2>
        </div>
        <div className={styles.skillGrid}>
          {publicProfile.skills
            .filter((category) => category.skills.length > 0)
            .map((category) => (
              <section
                className={styles.skillGroup}
                key={category.title}
                aria-labelledby={`skill-${category.title}`}
              >
                <h3 id={`skill-${category.title}`}>{category.title}</h3>
                <ul className={styles.tagList}>
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </section>
            ))}
        </div>
      </section>

      <section className={styles.contentSection} aria-labelledby="featured-title">
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>대표 프로젝트</p>
          <h2 id="featured-title">{publicProfile.featuredProject.name}</h2>
        </div>
        <div className={styles.projectSummary}>
          {/*<p className={styles.description}>*/}
          {/*  {publicProfile.featuredProject.description}*/}
          {/*</p>*/}
          <dl className={styles.metaList}>
            <div>
              <dt>현재 상태</dt>
              <dd>{publicProfile.featuredProject.status}</dd>
            </div>
            <div>
              <dt>주요 기술</dt>
              <dd>{publicProfile.featuredProject.technologies.join(', ')}</dd>
            </div>
          </dl>
          <Link className={styles.textLink} to="/projects">
            프로젝트 목록으로 이동
          </Link>
        </div>
      </section>

      <section className={styles.contentSection} aria-labelledby="links-title">
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>외부 링크</p>
          <h2 id="links-title">연결 가능한 채널</h2>
        </div>
        <ul className={styles.linkList}>
          {visibleExternalLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
