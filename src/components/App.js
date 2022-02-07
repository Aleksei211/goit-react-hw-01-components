import Profile from './profile/Profile';
import SectionStat from './statistics/SectionStats';
import StatisticsList from './statistics/statisticsList';
import FriendsList from './friends/FriendsList';
import Transaction from './transactions/Transactions';

import user from '../user.json';
import stat from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <SectionStat title="Upload stats">
        <StatisticsList items={stat} />
      </SectionStat>
      <FriendsList items={friends} />
      <Transaction items={transactions} />
    </div>
  );
}
