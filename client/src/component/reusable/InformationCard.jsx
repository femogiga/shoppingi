import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setActiveCard } from '../../features/home/homeSlice';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const InformationCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoBack = (e) => {
    e.preventDefault();
    dispatch(setActiveCard('operationCard'));
    localStorage.setItem('activeCard', null);
  };
  // let data
  // //
  // // const productCard = useSelector((state) => state.home.data)
  // data = localStorage.getItem('activeCard')
  // console.log(data)
  //
  // console.log('proctCard',productCard)

  const data = useSelector((state) => state.informationCard.data);
  console.log('myData', data);

  return (
    <div className='information-card pad-2 flex flex-column space-between row gap-2'>
      <div>
        <Link className='font-orange' onClick={handleGoBack}>
          <span>&#8592;</span> back
        </Link>
      </div>

      <picture className='img-cont'>
        {/* <img src='https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' /> */}
        <img src={data?.imageUrl} />
      </picture>
      <div>
        <p className='clr-grey'>name</p>
        <p>{data?.product_name}</p>
      </div>
      <div>
        <p className='clr-grey'>category</p>
        <p>{data.category}</p>
      </div>
      <div>
        <p className='clr-grey'>notes</p>
        <p>
          {/* Nutrient dense food are those that provide substantial amounts of
          vitamin ,minerals and other nutrients with relatively few
          calories.One-third of a medium avocado(50g) has 80 calories and
          contributes nearly 20 vitamins and minerals , making it a great
          nutrient-dense food choice */}
          {data.note}
        </p>
      </div>
      <form className='flex justify-center col-gap-2'>
        <button className='delete'>delete</button>
        <button className='add-to-list'>Add to list</button>
      </form>
    </div>
  );
};

export default InformationCard;
//
