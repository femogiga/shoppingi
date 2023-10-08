import Sidebar from './reusable/Sidebar';
import Meter from './reusable/Meter';
import Chart from './reusable/Chart';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import InformationCard from './reusable/InformationCard';
import FormCard from './reusable/FormCard';
import OperationCard from './reusable/OperationCard';
const Statistics = () => {
  const operationCardStatus = useSelector(
    (state) => state.home.activeCard.operation
  );
  const formCardStatus = useSelector((state) => state.home.activeCard.form);
  const informationCardStatus = useSelector(
    (state) => state.home.activeCard.information
  );
  return (
    <div className='statistics'>
      <aside className='sidebar'>
        <Sidebar />
      </aside>
      <div className='body'>
        <section className='flex space-between col-gap-2 pad-inline-2 flow-2'>
          <div>
            <h2 className='flow-2'>Top Items</h2>
            <Meter product={'Banana'} stat={'20'} />
            <Meter product={'Rice'} stat={'10'} />
            <Meter product={'Chicken 1kg'} stat={'8'} />
          </div>
          <div className='stat-category'>
            <h2 className='flow-2'>Top Categories</h2>
            <Meter product={'Fruit and vegetables'} stat={'23'} />
            <Meter product={'Meat and Fish'} stat={'14'} />
            <Meter product={'Pets'} stat={'11'} />
          </div>
        </section>
        <section>
          <h2 className='flow-2 pad-inline-2'>Monthly Summary</h2>
          <Chart />
        </section>
      </div>
      {operationCardStatus && <OperationCard />}
      {informationCardStatus && <InformationCard />}
      {formCardStatus && <FormCard />}
    </div>
  );
};

export default Statistics;
