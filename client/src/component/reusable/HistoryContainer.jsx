import { useSelector, useDispatch } from 'react-redux';
import { setColor } from '../../features/history/historyCardSlice';
import { useEffect } from 'react';
import HCard from './HCard';
import { historyData } from '../../features/history/historyCardSlice';

const HistoryContainer = () => {
  const cssColor = useSelector((state) => state.historyCard.cssColor);
  const hisData = useSelector((state) => state.historyCard.data);
  const dispatch = useDispatch();
  const holding = 'completed';
  // const historyD = dispatch(historyData())
  useEffect(() => {
    // holding === dispatch(setColor());
    dispatch(historyData());
  }, [dispatch]);
  console.log('hisdata', hisData);
  // let arr = []
  //   for (let keys in hisData) {
  //     arr.push({ [keys]:hisData[keys]})
  //     console.log(arr)
  //   }
  let arr = []
  // console.log(hisData[0])
  for (let keys in hisData[0]) {
    arr.push({ keys: keys, value: hisData[0][keys] })
    console.log('arr',arr)
   }
  return (
    <article className='history-card  pad-inline-3'>
      {/* <p className='flow-1'>August 2020</p>
      {/* <HistoryContainer /> */}
      {/* <HCard holding={'cancelled'} link={'/history/' + 1} />
      <HCard holding='completed' />
      <HCard holding='completed' />
      <HCard holding='completed' />
      <HCard holding={'cancelled'} />
      <HCard holding='completed' />
      <HCard holding='completed' /> */}

      {arr.map((item) => (
        <>
          <p className='flow-1'>August 2020</p>

          <HCard holding={'cancelled'} link={'/history/' + 1} />
        </>
      ))}
    </article>
  );
};

export default HistoryContainer;
