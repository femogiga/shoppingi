import React, { useState } from 'react';
import Sidebar from './reusable/Sidebar';
import Header from './reusable/Header';
import AvailableCard from './reusable/AvailableCard';
import AddCard from './reusable/AddCard';
import EnterCategory from './reusable/EnterCategory';
import ItemCard from './reusable/ItemCard';

const Home = () => {
  return (
    <div className='home'>
      <aside className='sidebar'>
        <Sidebar />
      </aside>
      <div className='body'>
        <Header />
        <AvailableCard />
        <AvailableCard />
        <AvailableCard />
        <AvailableCard />
      </div>
      <div className='operation-card flex flex-column space-between'>
        <div>
          <AddCard />
          <ItemCard />
        </div>
        <EnterCategory />
      </div>
    </div>
  );
};

export default Home;
