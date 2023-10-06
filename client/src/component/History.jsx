import Sidebar from './reusable/Sidebar';
import FormCard from './reusable/FormCard';
import AvailableCard from './reusable/AvailableCard';
import HCard from './reusable/HCard';
import HistoryContainer from './reusable/HistoryContainer';

const History = () => {
  return (
    <div className='home'>
      <aside className='sidebar'>
        <Sidebar />
      </aside>
      <div className='body '>
        <div className='body-container '>
          <h2 className='pad-inline-3'>Shopping history</h2>
        </div>
        {/* <article className='history-card  pad-inline-3'>
          <p className='flow-1'>August 2020</p>
          <HistoryContainer/>
          <HCard />
          <HCard />
          <HCard />
          <HCard />
          <HCard />
          <HCard />
        </article> */}
        <HistoryContainer/>
      </div>

      <FormCard />
    </div>
  );
};

export default History;
