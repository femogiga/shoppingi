import Sidebar from './reusable/Sidebar';
import FormCard from './reusable/FormCard';
import AvailableCard from './reusable/AvailableCard';
import HCard from './reusable/HCard';

const History = () => {
  return (
    <div className='home'>
      <aside className='sidebar'>
        <Sidebar />
      </aside>
      <div className='body'>
        <div className='body-container'>
          <h2>Shopping history</h2>
        </div>
        <article className='history-card'>
          <p className='flow-1'>August 2020</p>
          <HCard />
          <HCard />
          <HCard />
          <HCard />
          <HCard />
          <HCard />
        </article>
      </div>

      <FormCard />
    </div>
  );
};

export default History;
