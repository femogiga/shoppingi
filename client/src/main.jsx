import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './features/store';
import { Provider } from 'react-redux';
import Home from './component/Home.jsx';
import History from './component/History.jsx';
import Statistics from './component/Statistics.jsx';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/home/id' element={<Home />} /> */}
        <Route path='/history' element={<History />} />
        <Route path='/statistics' element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);
