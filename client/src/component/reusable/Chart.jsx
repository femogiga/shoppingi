import React from 'react';
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
  const data = [
    {
      name: 'January',
      items: 300,
    },
    {
      name: 'February',
      items: 800,
    },
    {
      name: 'March',
      items: 2000,
    },
    {
      name: 'April',
      items: 2080,
    },
    {
      name: 'May',
      items: 1000,
    },
    {
      name: 'June',
      items: 1000,
    },
    {
      name: 'July',
      items: 2000,
    },
    {
      name: 'August',
      items: 1780,
    },
    {
      name: 'September',
      items: 1000,
    },
    {
      name: 'October',
      items: 80,
    },
    {
      name: 'November',
      items: 1000,
    },
    {
      name: 'December',
      items: 2580,
    },
  ];
  return (

      <LineChart width={800} height={350} data={data}>
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
