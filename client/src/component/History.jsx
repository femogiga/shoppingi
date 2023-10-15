import Sidebar from './reusable/Sidebar';
import FormCard from './reusable/FormCard';
import AvailableCard from './reusable/AvailableCard';
import HCard from './reusable/HCard';
import HistoryContainer from './reusable/HistoryContainer';
import InformationCard from './reusable/InformationCard';
import OperationCard from './reusable/OperationCard';
import { useSelector } from 'react-redux';

const History = () => {
  const operationCardStatus = useSelector(
    (state) => state.home.activeCard.operation
  );
  const formCardStatus = useSelector((state) => state.home.activeCard.form);
  const informationCardStatus = useSelector(
    (state) => state.home.activeCard.information
  );

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
        <HistoryContainer />
      </div>
      {operationCardStatus && <OperationCard />}
      {informationCardStatus && <InformationCard />}
      {formCardStatus && <FormCard />}
      {/* <FormCard /> */}
    </div>
  );
};

export default History;
