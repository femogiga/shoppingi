import { useSelector, useDispatch } from 'react-redux';
import { setColor } from '../../features/history/historyCardSlice';
import { useEffect } from 'react';
import HCard from './HCard';

const HistoryContainer = () => {
  const cssColor = useSelector((state) => state.historyCard.cssColor);
  const dispatch = useDispatch();
  const holding = 'completed';

  useEffect(() => {
    // holding === dispatch(setColor());
  }, [setColor]);
  return (
    <article className='history-card  pad-inline-3'>
      <p className='flow-1'>August 2020</p>
      {/* <HistoryContainer /> */}
      <HCard holding={'cancelled'}  link={'/history/' + 1}/>
      <HCard holding='completed' />
      <HCard holding='completed' />
      <HCard holding='completed' />
      <HCard holding={'cancelled'} />
      <HCard holding='completed' />
      <HCard holding='completed' />
    </article>
  );
};

export default HistoryContainer;
