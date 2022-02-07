import PropTypes from 'prop-types';
import s from '../statistics/Statistics.module.css';

export default function SectionStat({ title, children }) {
  return (
    <section className={s.title}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
SectionStat.propTypes = {
  title: PropTypes.string,
};
