import bottle from '../../assets/source.svg';
import { Link } from 'react-router-dom';

const AddCard = () => {
  return (
    <div className='add-card'>
      <div>
        <div className='flow-3'>
          <div className='bottle-cont flex space-between col-gap-2 row-gap-2'>
            <div className='bottle'>
              <img src={bottle} alt='bottle' />
            </div>

            <div className='text-button'>
              <p className='flow-1'>Didn't find what you need</p>
              <button>Add item</button>
            </div>
          </div>
        </div>
        <div>
          <div className='flex '>
            <h3 className='wd-100'>Shopping list</h3>
            <div>
              <Link>
                <span className='material-symbols-outlined'>edit</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
