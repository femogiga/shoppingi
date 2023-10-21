import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchChartdata } from '../../features/home/chartSlice';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const Chart = () => {
  const chartData = useSelector((state) => state.chart.data);
  console.log('chartData', chartData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChartdata());
  }, [dispatch]);


  return (
    <LineChart width={800} height={350} data={chartData}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' padding={{ left: 0, right: 0 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type='monotone'
        dataKey='items'
        stroke='#F9A109'
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default Chart;
