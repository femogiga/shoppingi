import { useSelector, useDispatch } from 'react-redux';
import AddCard from './reusable/AddCard';
import FormCard from './reusable/FormCard';
import InformationCard from './reusable/InformationCard';
import OperationCard from './reusable/OperationCard';
import Sidebar from './reusable/Sidebar';
import Card from './reusable/Card';
import Modal from './reusable/Modal';
import { useLocation } from 'react-router-dom';
import SummaryHeader from './reusable/SummaryHeader';
import shoppingList from '../features/home/shoppingList';
import { dateFormat } from './../utility/timeUtility';
import { useEffect } from 'react';
import { fetchCategory } from '../features/home/AllCategorySlice';

const Summary = () => {
  const operationCardStatus = useSelector(
    (state) => state.home.activeCard.operation
  );
  const formCardStatus = useSelector((state) => state.home.activeCard.form);
  const informationCardStatus = useSelector(
    (state) => state.home.activeCard.information
  );
  const categories = useSelector((state) => state.allCategory.data);
  const dispatch = useDispatch();
  // const summaryData =  useSelector((state) => state.historyCard.data)
  //   console.log('summaryData',summaryData)
  //
  const location = useLocation();
  const { from } = location.state;
  console.log('from', from);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  console.log('categoroies', categories);

  // const mapCategories = (id) => {
  //   const toCat = categories.map(items => {
  //     if(id === items.id)
  //     return items.category_name
  //   })
  //   return toCat
  // }

  const mapCategories = (id) => {
    const category = categories.find((item) => item.id === id);
    return category ? category.category_name : '';
  };

  const data = [
    // Your data here
  ];

  const result = [];
  const catIdGroups = {};

  from.forEach((item) => {
    const { catId, ...rest } = item.product;

    if (!catIdGroups[catId]) {
      catIdGroups[catId] = [rest];
    } else {
      catIdGroups[catId].push(rest);
    }
  });

  for (const catId in catIdGroups) {
    result.push({
      catId: catId,
      products: catIdGroups[catId],
    });
  }

  console.log('result', result);

  return (
    <div className='summary'>
      <aside className='sidebar'>
        <Sidebar />
      </aside>
      <div className='body'>
        {/* <section>
          <h2>Eero's farewell party</h2>
          <div>
            <p className='flex clr-grey'>
              <span className='material-symbols-outlined margin-right-1'>
                event_note
              </span>
              Mon 27.7.2020
            </p>
          </div>
        </section> */}

        <SummaryHeader
          title={from[0].shoppingList.listName}
          createdAt={dateFormat('ddmy', from[0].shoppingList.createdAt)}
        />
        {result.map((item, index) => (
          <article className='flow-3' key={index}>
            <p className='flow-1'>
              {/* {mapCategories(from[parseInt(item.catId)].product.catId)} */}
              {mapCategories(parseInt(item.catId))}
            </p>
            <div className='flex col-gap-2'>
              {item.products.map(
                (product, index) => (
                  <Card
                    product_name={product.product_name}
                    key={product.product_name}
                  />
                )
                // <Card product_name={'Doris truffle'} />
              )}
            </div>
          </article>
        ))}

        {/* <article>
          <p className='flow-1'>Beverages</p>
          <div className='flex col-gap-1'>
            <Card product_name={'Coca-cola'} />
            <Card product_name={'Beer'} />
            <Card product_name={'Cider'} />
          </div>
        </article> */}
        {/* <Modal /> */}
      </div>
      {operationCardStatus && <OperationCard />}
      {informationCardStatus && <InformationCard />}
      {formCardStatus && <FormCard />}
    </div>
  );
};

export default Summary;
