import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../features/home/cartSlice';
import { setActiveInput, setChecked } from '../../features/home/checkboxSlice';

const ProductCard = ({ productName, productCount, onChange,color ,isChecked,ele}) => {
  const [toggle, setToggle] = useState(false);
  const whiteStyle = { backgroundColor: 'white' };
  const creamStyle = { backgroundColor: '#FFF0DE' };
  const dispatch = useDispatch();
  const checkboxState = useSelector((state) => state.checkbox.checkboxState);
  const recycleBinState = useSelector(
    (state) => state.checkbox.recycleBinState
  );
  // const checkboxChange = useSelector((state) => state.checkbox.checked);

  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <li className='product-card flex space-between place-items flow-1'>
      <p className={''} style={{textDecoration:`${color}`}} >{productName}</p>
      <div
        style={toggle ? whiteStyle : creamStyle}
        className={`quantity-button-cont flex place-items space-between rel`}>
        {checkboxState && toggle && (
          <input type='checkbox'  onChange={onChange} />

        )}
        {recycleBinState && toggle && (
          <button className='delete-button remove-border'>
            <span className='material-symbols-outlined'>delete</span>
          </button>
        )}
        {toggle && (
          <button
            className='remove-button remove-border'
            onClick={() => dispatch(decrement(productName))}>
            <span className='material-symbols-outlined font-orange'>
              remove
            </span>
          </button>
        )}
        <button onClick={handleToggle} className='quantity-button'>
          <span>{productCount}</span> pcs
        </button>
        {toggle && (
          <button
            className='add-button remove-border'
            onClick={() => dispatch(increment(productName))}>
            <span className='material-symbols-outlined font-orange'>add</span>
          </button>
        )}
      </div>
    </li>
  );
};

export default ProductCard;
