import { Link } from 'react-router-dom';

import { PageMeta } from '../components/PageMeta';
import styles from './Page.module.css';

export function NotFoundPage() {
  return (
    <section className={styles.notFound} aria-labelledby="not-found-title">
      <PageMeta title="404 · Portfolio note" description="요청한 페이지를 찾지 못했습니다." />
      <p className={styles.notFoundMark} aria-hidden="true">404</p>
      <h1 id="not-found-title">여기엔 아직 아무것도 없어요.</h1>
      <p>주소를 다시 확인하거나 첫 화면으로 돌아가 보세요.</p>
      <Link to="/">홈으로 돌아가기 →</Link>
    </section>
  );
}
