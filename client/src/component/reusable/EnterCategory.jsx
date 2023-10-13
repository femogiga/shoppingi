import { useSelector, useDispatch } from 'react-redux';
import { getListName, saveShoppingList } from '../../features/home/shoppingList';

const EnterCategory = () => {
  const data = useSelector((state) => state.cart);
  const listName = useSelector((state) => state.shoppingList.listName);
  const dispatch = useDispatch();
  console.log(listName)
  //dispatch this with the data to shopiingList
  const handleInputChange = (e) => {
    dispatch(getListName({ field: e.target.name, value: e.target.value }));
  };
  const handleCreateShoppingList = () => {
    console.log('cartData', data);
    console.log('listName', listName);
    console.log({ listName: listName,data });
    dispatch(saveShoppingList({ listName: listName, ...data }));
  };

  return (
    <div className='enter-category-cont'>
      <div className='enter-category flex align-items-center justify-center rel'>
        <input
          type='text'
          value={listName}
          name='listName'
          placeholder='Enter a name'
          className='input-text'
          onChange={(e) => handleInputChange(e)}
        />
        <button onClick={handleCreateShoppingList}>Save</button>
      </div>
    </div>
  );
};

export default EnterCategory;
