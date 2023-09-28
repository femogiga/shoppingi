import React from 'react';
import Sidebar from './reusable/Sidebar';
import Header from './reusable/Header';
import AvailableCard from './reusable/AvailableCard';
import AddCard from './reusable/AddCard';
import EnterCategory from './reusable/EnterCategory';

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
      <div className='operation-card'>
        <AddCard />
        <EnterCategory />
      </div>
    </div>
  );
};

export default Home;
