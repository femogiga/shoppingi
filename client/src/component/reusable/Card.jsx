import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../../features/home/cartSlice';

const Card = ({ product_name, onClick, isPlus, count }) => {
  const dispatch = useDispatch();
  return (
    <li className='list-item'>
      <Link
        className='card flex space-between col-gap-1'
        // onClick={(e) => {
        //   e.preventDefault();
        //  dispatch(add({product_name: product_name,count:1 }));
        //  }}>
        onClick={onClick}>
        <p style={{ fontWeight: 'bold' }}>{product_name}</p>
        {isPlus ? (
          <span className='material-symbols-outlined'>add</span>
        ) : (
          <p className='text-count'>{`${count}pcs`} </p>
        )}
      </Link>
    </li>
  );
};

export default Card;
