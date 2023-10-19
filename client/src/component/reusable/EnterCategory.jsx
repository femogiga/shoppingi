import { useSelector, useDispatch } from 'react-redux';
import {
  getListName,
  saveShoppingList,
  clear,
} from '../../features/home/shoppingList';
import {
  clearMessage,
  fetchActiveList,
  setMessage,
} from '../../features/home/activeShoppingListSlice';
import { useEffect } from 'react';

const EnterCategory = () => {
  const data = useSelector((state) => state.cart);
  const listName = useSelector((state) => state.shoppingList.listName);
  const activeList = useSelector((state) => state.activeShoppingList.data);
  const activeMessage = useSelector(
    (state) => state.activeShoppingList.message
  );
  console.log('activeList', activeList);
  const dispatch = useDispatch();
  console.log(listName);
  //dispatch this with the data to shopiingList

  const handleInputChange = (e) => {
    dispatch(getListName({ field: e.target.name, value: e.target.value }));
  };

  const handleCreateShoppingList = () => {
    if (activeList.length > 0) {
      dispatch(setMessage());
      setTimeout(() => dispatch(clearMessage()), 2000);
      return;
    }
    console.log('cartData', data);
    console.log('listName', listName);
    console.log({ listName: listName, data });
    dispatch(saveShoppingList({ listName: listName, ...data }));
    dispatch(clear());
  };

  useEffect(() => {
    dispatch(fetchActiveList());
  }, [dispatch]);

  return (
    <div className='enter-category-cont'>
      <div className='enter-category flex align-items-center justify-center rel'>
        <p
          style={{
            position: 'absolute',
            top: 0,
            textAlign: 'justify',
            padding: '.5rem',
            fontSize: '.8rem',
          }}>
          {activeMessage}
        </p>
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
