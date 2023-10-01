import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../features/home/cartSlice';

const ItemCard = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector((state) => state.cart);
  console.log(shoppingList);
  return (
    <article>
      <h5 className='flow-1 pad-inline-2'>Fruit and vegetable</h5>
      <ul className='cart-ul pad-inline-2'>
        {shoppingList.map((product, index) => (
          <ProductCard
            id={product.product_name}
            key={index}
            productName={product.product_name}
            productCount={product.count}
          />
        ))}

        {/* <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </ul>
    </article>
  );
};

export default ItemCard;
////
