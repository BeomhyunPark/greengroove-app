import { Link } from 'react-router-dom';

import styles from './Page.module.css';

export function NotFoundPage() {
  return (
    <section className={styles.section} aria-labelledby="not-found-title">
      <p className={styles.kicker}>404</p>
      <h1 id="not-found-title">찾을 수 없는 화면</h1>
      <p className={styles.description}>
        요청한 주소에 해당하는 화면이 없습니다.
      </p>
      <Link className={styles.textLink} to="/">
        홈으로 이동
      </Link>
    </section>
  );
}
