import PropTypes from 'prop-types';
import Friend from './Friend';
import s from '../friends/Friends.module.css';

export default function FriendsList({ items }) {
  return (
    <ul className={s.list}>
      {items.map(item => (
        <Friend
          key={item.id}
          name={item.name}
          avatar={item.avatar}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}
FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
