import AddCard from './AddCard';
import EnterCategory from './EnterCategory';
import ItemCard from './ItemCard';

const OperationCard = () => {
  return (
    <div className='operation-card flex flex-column space-between'>
      <div className='make-sticky'>
        <AddCard />
        <ItemCard />
      </div>
      <EnterCategory />
    </div>
  );
};

export default OperationCard;
