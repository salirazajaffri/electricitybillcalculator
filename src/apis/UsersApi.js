import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/';
export default axios.create({
  baseURL: url,
});
