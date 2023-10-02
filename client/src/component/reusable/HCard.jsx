import React from 'react';
import { Link } from 'react-router-dom';

const HCard = () => {
  return (
    <div className='hcard flex col-gap-2 space-between gap-2 flow-2'>
      <p>Grocery List</p>
      <div className='flex  space-between col-gap-2'>
        <div>
          <p className='flex'>
            <span className='material-symbols-outlined margin-right-1'>
              event_note
            </span>
            Mon 27.7.2020
          </p>
        </div>
        <p className='completed'>completed</p>
        <div>
          <Link>
            <span className='material-symbols-outlined'>navigate_next</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HCard;
