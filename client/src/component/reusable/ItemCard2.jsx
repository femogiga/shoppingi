import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../../features/home/cartSlice';
// import { setActiveInput, setChecked } from '../../features/home/checkboxSlice';
import { useState } from 'react';

const ItemCard2 = () => {
  // const [color, setColor] = useState('');
  const [checkboxStatus, setCheckboxStatus] = useState({});
  const dispatch = useDispatch();
  const shoppingList = useSelector((state) => state.cart);
  // const activeList = useSelector((state) => state.activeShoppingList.data)
  const result = [];
  // const checkboxChange = useSelector((state) => state.checkbox.checked);
  // const activeList = useSelector((state) => state.shoppingList.data);
// console.log('activeList===>',activeList)
  const handleCheckboxInput = (productId) => {
    setCheckboxStatus((prevState) => ({
      ...prevState,
      [productId]:!prevState[productId]
    }))

  }
  // console.log('shoppinList', shoppingList)

  shoppingList.forEach((item) => {
    const { category, ...rest } = item;

    const existingEntry = result.find((entry) => entry.category === category);

    if (existingEntry) {
      existingEntry.items.push(rest);
    } else {
      result.push({ category, items: [rest] });
    }
  });

  // console.log(result);
  // const array = activeList[0]
  // console.log(array?.products)
  return (
    <article>

      <ul className='cart-ul pad-inline-2'>
        {  result.map((product, index) => (
          <div key={`product-${index}`}>
            <h5 className='flow-1 clr-quicksand' key={product.category}>
              {product.category}
            </h5>
            { product?.items?.map((item) => (
              <ProductCard
                id={item?.product_name}
                key={item?.id + 'cs'}
                productName={item?.product_name}
                productCount={item?.count}
                // onChange={(e) => handleCheckboxInput(e)}
                onChange={() =>  handleCheckboxInput(item.id) }
                color={checkboxStatus[item?.id] ? 'line-through':''}


              />
            ))}
          </div>
        ))}

        {/* <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </ul>
    </article>
  );
};

export default ItemCard2;
////
