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

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.home.data);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log('data', products);
  return (
    <div className='home'>
      <aside className='sidebar'>
        <Sidebar />
      </aside>
      <div className='body'>
        <Header />
        {/* <AvailableCard />
        <AvailableCard />
        <AvailableCard /> */}
        {products.map((item) => (
          <AvailableCard
            key={item.category_name}
            category={item.category_name}
            productArray={item.products}
          />
        ))}
      </div>
      {/* <div className='operation-card flex flex-column space-between'>
        <div className='make-sticky'>
          <AddCard />
          <ItemCard />
        </div>
        <EnterCategory />
      </div> */}
      <InformationCard/>
    </div>
  );
};

export default Home;
