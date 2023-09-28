import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment,decrement } from '../../features/home/cartSlice';

const ProductCard = ({ productName, productCount }) => {
  const [toggle, setToggle] = useState(false);
  const whiteStyle = { backgroundColor: 'white' };
  const creamStyle = { backgroundColor: '#FFF0DE' };
  const dispatch =  useDispatch()
 

  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <li className='flex space-between place-items flow-1'>
      <p>{productName}</p>
      <div
        style={toggle ? whiteStyle : creamStyle}
        className={`quantity-button-cont flex place-items space-between rel`}>
        {toggle && (
          <button className='delete-button remove-border'>
            <span className='material-symbols-outlined'>delete</span>
          </button>
        )}
        {toggle && (
          <button
            className='remove-button remove-border'
            onClick={() => dispatch(decrement(productName))}>
            <span className='material-symbols-outlined'>remove</span>
          </button>
        )}
        <button onClick={handleToggle} className='quantity-button'>
          <span>{productCount}</span> pcs
        </button>
        {toggle && (
          <button
            className='add-button remove-border'
            onClick={() => dispatch(increment(productName))}>
            <span className='material-symbols-outlined'>add</span>
          </button>
        )}
      </div>
    </li>
  );
};

export default ProductCard;
