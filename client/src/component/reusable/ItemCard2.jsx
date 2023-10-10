import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../features/home/cartSlice';
import { setActiveInput, setChecked } from '../../features/home/checkboxSlice';


const ItemCard2 = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector((state) => state.cart);
  const result = [];
  const checkboxChange = useSelector((state) => state.checkbox.checked);

   const handleCheckboxInput = (e) => {
     dispatch(setChecked());
     return;
   };

  shoppingList.forEach((item) => {
    const { category, ...rest } = item;

    const existingEntry = result.find((entry) => entry.category === category);

    if (existingEntry) {
      existingEntry.items.push(rest);
    } else {
      result.push({ category, items: [rest] });
    }
  });

  console.log(result);

  return (
    <article>
      {/* <h5 className='flow-1 pad-inline-2'>Fruit and vegetable</h5> */}
      <ul className='cart-ul pad-inline-2'>
        {result.map((product, index) => (
          <>
            <h5 className='flow-1 clr-quicksand' key={product.category}>
              {product.category}
            </h5>
            {product?.items?.map((item) => (
              <ProductCard
                id={item?.product_name}
                key={item?.id + 'cs'}
                productName={item?.product_name}
                productCount={item?.count}
                onChange= {handleCheckboxInput}
              />
            ))}
          </>
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
