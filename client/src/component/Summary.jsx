import { useSelector } from 'react-redux';
import AddCard from './reusable/AddCard';
import FormCard from './reusable/FormCard';
import InformationCard from './reusable/InformationCard';
import OperationCard from './reusable/OperationCard';
import Sidebar from './reusable/Sidebar';
import Card from './reusable/Card';
import Modal from './reusable/Modal';

const Summary = () => {
  const operationCardStatus = useSelector(
    (state) => state.home.activeCard.operation
  );
  const formCardStatus = useSelector((state) => state.home.activeCard.form);
  const informationCardStatus = useSelector(
    (state) => state.home.activeCard.information
  );
  return (
    <div className='summary'>
      <aside className='sidebar'>
        <Sidebar />
      </aside>
      <div className='body'>
        <section>
          <h2>Eero's farewell party</h2>
          <div>
            <p className='flex clr-grey'>
              <span className='material-symbols-outlined margin-right-1'>
                event_note
              </span>
              Mon 27.7.2020
            </p>
          </div>
        </section>
        <article className='flow-3'>
          <p className='flow-1'>Cookies</p>
          <div className='flex col-gap-2'>
            <Card product_name={'Avocado'} />
            <Card product_name={'Doris truffle'} />
          </div>
        </article>

        <article>
          <p className='flow-1'>Beverages</p>
          <div className='flex col-gap-1'>
            <Card product_name={'Coca-cola'} />
            <Card product_name={'Beer'} />
            <Card product_name={'Cider'} />
          </div>
        </article>
        <Modal />
      </div>
      {operationCardStatus && <OperationCard />}
      {informationCardStatus && <InformationCard />}
      {formCardStatus && <FormCard />}
    </div>
  );
};

export default Summary;
