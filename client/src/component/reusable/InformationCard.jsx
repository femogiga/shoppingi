import React from 'react';
import { Link } from 'react-router-dom';

const InformationCard = () => {
  return (
    <div className='information-card pad-2 flex flex-column space-between row gap-2'>
      <div>
        <Link className='font-orange'>
          <span>&#8592;</span> back
        </Link>
      </div>

      <picture className='img-cont'>
        <img src='https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      </picture>
      <div>
        <p className='clr-grey'>name</p>
        <p>Avocado</p>
      </div>
      <div>
        <p className='clr-grey'>category</p>
        <p>Fruit and vegetables</p>
      </div>
      <div>
        <p className='clr-grey'>notes</p>
        <p>
          Nutrient dense food are those that provide substantial amounts of
          vitamin ,minerals and other nutrients with relatively few
          calories.One-third of a medium avocado(50g) has 80 calories and
          contributes nearly 20 vitamins and minerals , making it a great
          nutrient-dense food choice
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
