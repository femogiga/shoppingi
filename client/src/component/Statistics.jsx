import Sidebar from './reusable/Sidebar';
import Meter from './reusable/Meter';
import Chart from './reusable/Chart';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import InformationCard from './reusable/InformationCard';
import FormCard from './reusable/FormCard';
import OperationCard from './reusable/OperationCard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { historyData } from '../features/history/historyCardSlice';
import { fetchCategory } from '../features/home/AllCategorySlice';
const Statistics = () => {
  const operationCardStatus = useSelector(
    (state) => state.home.activeCard.operation
  );
  const formCardStatus = useSelector((state) => state.home.activeCard.form);
  const informationCardStatus = useSelector(
    (state) => state.home.activeCard.information
  );
  const dispatch = useDispatch();
  useEffect(() => {
    // holding === dispatch(setColor());
    dispatch(fetchCategory());
    dispatch(historyData());
  }, [dispatch]);
  const statData = useSelector((state) => state.historyCard.data);
  const categories = useSelector((state) => state.allCategory.data);
  //console.log('stat', statData);
  let arr = [];
  for (let keys in statData[0]) {
    arr.push({ keys: keys, value: statData[0][keys] });
  }
  console.log('stat', arr);
  const statMap = arr.map((item) => {
    return item.value;
  });
  let newArr = [];
  console.log('statMap', statMap);
  statMap.forEach((item) => {
    const mappedArray = item.map((array) => {
      const { id, product, count } = array;
      const { product_name, catId } = product;
      let object = { id, product_name, count, catId };
      return object;
    });
    newArr = [...newArr, ...mappedArray];
  });

  //console.log('newArr2', newArr);

  // console.log('statMap', statMap);

  const groupedData = newArr.reduce((acc, current) => {
    const { product_name, count, catId } = current;

    if (acc[catId]) {
      acc[catId].count += count;
    } else {
      acc[catId] = { product_name, count, catId };
    }
    return acc;
  }, {});

  // Converting the object back to an array
  const result = Object.values(groupedData);

  console.log('result', result);

  const mapCategories = (id) => {
    const category = categories.find((item) => item.id === id);
    return category ? category.category_name : '';
  };
  const totalCount = result.reduce((acc, currentValue) => {
    // console.log('curval', currentValue);
    return acc + currentValue.count
  },0)

  console.log('totalCount', totalCount);
  return (
    <div className='statistics'>
      <aside className='sidebar'>
        <Sidebar />
      </aside>
      <div className='body'>
        <section className='flex space-between col-gap-2 pad-inline-2 flow-2'>
          <div>
            <h2 className='flow-2'>Top Items</h2>
            <Meter
              product={result[0]?.product_name}
              stat={parseInt((result[0]?.count / totalCount) * 100)}
            />
            <Meter
              product={result[1]?.product_name}
              stat={parseInt((result[1]?.count / totalCount) * 100)}
            />
            <Meter
              product={result[2]?.product_name}
              stat={parseInt((result[2]?.count / totalCount) * 100)}
            />
          </div>
          <div className='stat-category'>
            <h2 className='flow-2'>Top Categories</h2>
            <Meter
              product={mapCategories(result[0]?.catId)}
              stat={parseInt((result[0]?.count / totalCount) * 100)}
            />
            <Meter
              product={mapCategories(result[1]?.catId)}
              stat={parseInt((result[1]?.count / totalCount) * 100)}
            />
            <Meter
              product={mapCategories(result[2]?.catId)}
              stat={parseInt((result[2]?.count / totalCount) * 100)}
            />
          </div>
        </section>
        <section>
          <h2 className='flow-2 pad-inline-2'>Monthly Summary</h2>
          <Chart />
        </section>
      </div>
      {operationCardStatus && <OperationCard />}
      {informationCardStatus && <InformationCard />}
      {formCardStatus && <FormCard />}
    </div>
  );
};

export default Statistics;
