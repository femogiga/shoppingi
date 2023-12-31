import React, { useState } from 'react';
import Sidebar from './reusable/Sidebar';
import Header from './reusable/Header';
import AvailableCard from './reusable/AvailableCard';
import AddCard from './reusable/AddCard';
import EnterCategory from './reusable/EnterCategory';
import ItemCard from './reusable/ItemCard';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../features/home/homeSlice';
import InformationCard from './reusable/InformationCard';
import FormCard from './reusable/FormCard';
import OperationCard from './reusable/OperationCard';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.home.data);
  const operationCardStatus = useSelector(
    (state) => state.home.activeCard.operation
  );
  const formCardStatus = useSelector((state) => state.home.activeCard.form);
  const informationCardStatus = useSelector(
    (state) => state.home.activeCard.information
  );
  const [parent, enableAnimations, enable] = useAutoAnimate();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // console.log('data', products);
  return (
    <div className='home' ref={parent}>
      <aside className='sidebar'>
        <Sidebar />
      </aside>
      <div className='body'>
        <Header />

        {products.map((item) => (
          <AvailableCard
            key={item.category_name}
            category={item.category_name}
            productArray={item.products}
          />
        ))}
      </div>

      {operationCardStatus && <OperationCard />}
      {informationCardStatus && <InformationCard />}
      {formCardStatus && <FormCard />}
    </div>
  );
};

export default Home;
