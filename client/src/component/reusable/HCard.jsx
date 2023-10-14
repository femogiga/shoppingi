import { Link } from 'react-router-dom';
import { dateFormat } from '../../utility/timeUtility';

const HCard = ({ progress, link, date, listName }) => {
  return (
    <Link to={link}>
      <div className='hcard flex col-gap-2 space-between gap-2 flow-2'>
        <p>{listName}</p>
        <div className='flex  space-between col-gap-2'>
          <div>
            <p className='flex clr-grey'>
              <span className='material-symbols-outlined margin-right-1'>
                event_note
              </span>
              {date}
            </p>
          </div>
          <p
            id='completed'
            className={`cancelled-completed ${
              progress === 'ACTIVE'
                ? 'activestate'
                : progress === 'COMPLETED'
                ? 'completed'
                : 'cancelled'
            }`}>
            {progress}
          </p>
          <div>
            <span className='material-symbols-outlined'>navigate_next</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HCard;
