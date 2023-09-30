import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../../features/home/cartSlice';

const Card = ({ product_name }) => {
  const dispatch = useDispatch();
  return (
    <li className='list-item'>
      <Link
        className='card flex space-between'
        onClick={(e) => {
          e.preventDefault();
          dispatch(add({product_name: product_name,count:1 }));
        }}>
        <p>{product_name}</p>
        <span className='material-symbols-outlined'>add</span>
      </Link>
    </li>
  );
};

export default Card;
