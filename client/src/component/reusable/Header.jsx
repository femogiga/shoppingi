import { useDispatch, useSelector } from 'react-redux';
import {
  searchProducts,
  handleInputChange,
} from '../../features/home/homeSlice';

const Header = () => {
  const search = useSelector((state) => state.home.search);
  // console.log(search);
  const dispatch = useDispatch();
  return (
    <header className='header flex space-between flow-2'>
      <h2>
        <span style={{ color: 'var(--clr-orange)' }}>Shoppingify </span> allow
        you to take your shopping list wherever you go
      </h2>
      <form>
        <div className='input-cont'>
          <span className='material-symbols-outlined search-icon'>search</span>
          <input
            type='text'
            placeholder='search item'
            name='search'
            value={search}
            onChange={(e) => dispatch(handleInputChange(e.target.value))}
          />
        </div>
      </form>
    </header>
  );
};

export default Header;
//
