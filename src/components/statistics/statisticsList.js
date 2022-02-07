import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from '../statistics/Statistics.module.css';

export default function StatisticsList({ items }) {
  return (
    <ul className={s.list}>
      {items.map(item => (
        <Statistics
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
