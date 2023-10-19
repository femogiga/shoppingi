import { useDispatch } from 'react-redux';
import { saveAsComplete } from '../../features/history/completeSlice';
import { useParams } from 'react-router-dom';

const Complete = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const handleComplete = () => {
    const id = params.id;
    const data = { id: id, progress: 'Completed' };
    dispatch(saveAsComplete(data));
  };

  const handleCancel = () => {
    const id = params.id;
    const data = { id: id, progress: 'Cancelled' };
    dispatch(saveAsComplete(data));
  };
  return (
    <div className='enter-category-cont complete'>
      <div className='enter-category flex align-items-center justify-center rel'>
        <fieldset className='flex justify-center col-gap-2'>
          <button className='cancel' onClick={handleCancel}>
            cancel
          </button>
          <button className='save bg-lightblue' onClick={handleComplete}>
            Complete
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Complete;
