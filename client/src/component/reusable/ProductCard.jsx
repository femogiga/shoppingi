import React, { useState } from 'react';

const ProductCard = () => {
  const [toggle, setToggle] = useState(false);
  const whiteStyle = { backgroundColor: 'white' };
  const creamStyle = { backgroundColor: '#FFF0DE' };

  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <div className='flex space-between place-items flow-1'>
      <p>Avocado</p>
      <div
        style={toggle ? whiteStyle : creamStyle}
        className={`quantity-button-cont flex place-items space-between rel`}>
        {toggle && (
          <button className='delete-button remove-border'>
            <span className='material-symbols-outlined'>delete</span>
          </button>
        )}
        {toggle && (
          <button className='remove-button remove-border'>
            <span className='material-symbols-outlined'>remove</span>
          </button>
        )}
        <button onClick={handleToggle} className='quantity-button'>
          3 pcs
        </button>
        {toggle && (
          <button className='add-button remove-border'>
            <span className='material-symbols-outlined'>add</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
