import utilStyles from '../styles/utils.module.css';
import css from '../styles/404.module.css';

export default function PageNotFound() {
  return (
    <div className={css.pageNotFound}>
      <h1 className={`${utilStyles.heading2Xl} ${css.title}`}>404</h1>
      <p className={`${utilStyles.headingXl} ${css.description}`}>
        Page Not Found
      </p>
    </div>
  );
}
