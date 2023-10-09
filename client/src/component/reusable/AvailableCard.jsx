import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { findById, setActiveCard } from '../../features/home/homeSlice';
import { setInformationCardData } from '../../features/home/informationCardSlice';

const AvailableCard = ({ category, productArray }) => {
  // category = 'Fruit and vegetables';
  const dispatch = useDispatch();
  const handleCardClick = (e, item) => {
    localStorage.setItem('activeCard', null);
    e.preventDefault();
    console.log(item);

    dispatch(setActiveCard('informationCard'));
    dispatch(setInformationCardData({ ...item, category: category }));
    localStorage.setItem('activeCard', item);
  };
  return (
    <article className='available-card flow-3'>
      <h3 className='flow-2'>{category}</h3>
      <ul className='list flex'>
        {/* <Card product={'Avocado'} />
        <Card product={'Banana'} />
        <Card product={'Bunch of carrots 5pcs'} />
        <Card product={'Chicken'} />
        <Card product={'Pre cooked corn'} />
        <Card product={'Mandarin Nadorcott'} />
        <Card product={'Piele De Sapo Melon'} /> */}
        {productArray.map((item) => (
          <Card
            isPlus={true}
            key={item.id}
            product_name={item.product_name}
            onClick={(e) => handleCardClick(e, item, category)}
          />
        ))}
      </ul>
    </article>
  );
};

export default AvailableCard;
