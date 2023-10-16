import { Link } from 'react-router-dom';
import { dateFormat } from '../../utility/timeUtility';

const HCard = ({ progress, link, date, listName ,linkData}) => {
  return (
    <Link to={link} state={{ from: linkData }}>
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
            className={`cancelled-completed  ${
              progress === 'Active'
                ? 'activestate'
                : progress === 'Completed'
                ? 'completed'
                : 'cancelled'
            }`} style={{textTransform:'capitalize'}}>
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
