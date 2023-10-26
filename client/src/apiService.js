import axios from 'axios';
const baseUrl = 'https://shoppingify-tzdo.onrender.com';
//const baseUrl = 'http://localhost:9000';

const get = (url) => {
  return axios.get(`${baseUrl}${url}`, {
    headers: { 'Content-Type': 'application/json' },
  });
};

const post = (url, data) => {
  return axios.post(`${baseUrl}${url}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const remove = (url) => {
  return axios.delete(`${baseUrl}${url}`, {
    headers: { 'Content-Type': 'application/json' },
  });
};

const update = (url, data) => {
  return axios.put(`${baseUrl}${url}`, data, {
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
};

export default { get, post, remove, update };
