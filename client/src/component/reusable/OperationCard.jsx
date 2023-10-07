import AddCard from './AddCard';
import EnterCategory from './EnterCategory';
import ItemCard from './ItemCard';
import ItemCard2 from './ItemCard2';

const OperationCard = () => {
  return (
    <div className='operation-card flex flex-column space-between'>
      <div className='make-sticky'>
        <AddCard />
        {/* <ItemCard /> */}
        <ItemCard2/>
      </div>
      <EnterCategory />
    </div>
  );
};

export default OperationCard;
