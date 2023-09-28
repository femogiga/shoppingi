import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../../features/home/cartSlice';

const ItemCard = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector((state) => state.cart);
console.log(shoppingList)
  return (
    <article>
      <h5 className='flow-1'>Fruit and vegetable</h5>
      <ul>
              {shoppingList.map(product => (<ProductCard id={product.name } key={product.name} productName={product.name} productCount={product.count}  />))}

        {/* <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </ul>
    </article>
  );
};

export default ItemCard;
