import axios from 'axios';
import { API_PATH } from 'utils/const'

// configure base url
const instance = axios.create({
  baseURL: `${API_PATH}/` ,
  headers: {
    'Authorization': 'Bearer 1|p9cPMCm36aAYmFS6NW7cYVt4glDU2dbO41RhwOD7A4x4HO0P49zQm2HlEEXO3PLsVwlb9T5qaVPCgDFb',
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "http://localhost:3000"
  }
});

// intercept requests and add authorization token
instance.interceptors.request.use((config) => {
  return config;
});


// intercept response and reload page if request error
// is caused by an expired token
instance.interceptors.response.use(
  response => response,
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }
);



export default instance;
