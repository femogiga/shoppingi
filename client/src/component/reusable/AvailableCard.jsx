import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const AvailableCard = ({ category }) => {
  category = 'Fruit and vegetables';
  return (
    <article className='available-card flow-3'>
      <h3 className='flow-2'>{category}</h3>
      <ul className='list flex'>
        <Card product={'Avocado'} />
        <Card product={'Banana'} />
        <Card product={'Bunch of carrots 5pcs'} />
        <Card product={'Chicken'} />
        <Card product={'Pre cooked corn'} />
        <Card product={'Mandarin Nadorcott'} />
        <Card product={'Piele De Sapo Melon'} />
        <Card product={'Watermelon'} />
      </ul>
    </article>
  );
};

export default AvailableCard;
