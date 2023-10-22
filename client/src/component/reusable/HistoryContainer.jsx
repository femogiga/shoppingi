import { useSelector, useDispatch } from 'react-redux';
import { setColor } from '../../features/history/historyCardSlice';
import { useEffect } from 'react';
import HCard from './HCard';
import { historyData } from '../../features/history/historyCardSlice';
import { dateFormat } from '../../utility/timeUtility';
import { Link } from 'react-router-dom';

const HistoryContainer = () => {
  // const cssColor = useSelector((state) => state.historyCard.cssColor);
  const hisData = useSelector((state) => state.historyCard.data);
  const dispatch = useDispatch();
  // const holding = 'completed';
  // const historyD = dispatch(historyData())
  useEffect(() => {
    // holding === dispatch(setColor());
    dispatch(historyData());
  }, [dispatch]);

  let arr = [];

  for (let keys in hisData[0]) {
    arr.push({ keys: keys, value: hisData[0][keys] });
    // console.log('arr', arr);
  }



  return (
    <article className='history-card  pad-inline-3'>
      {arr.map((item, index) => (
        <div key={`history-container-${item?.value[0]?.shoppingList?.listName}`}>
          <p
            className='flow-1'
             key={item?.value[0]?.shoppingList?.listName}
            >
            {dateFormat('dmy', item?.value[0]?.shoppingList?.createdAt)}
          </p>

          <HCard
            progress={item?.value[0]?.shoppingList?.progress}
            link={`/history/${parseInt(item.keys)}`}
            date={dateFormat('ddmy', item?.value[0]?.shoppingList?.createdAt)}
            listName={item?.value[0]?.shoppingList?.listName}
             key={item?.keys }

            linkData={item?.value}
          />
        </div>
      ))}
    </article>
  );
};

export default HistoryContainer;
