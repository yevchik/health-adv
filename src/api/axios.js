import axios from 'axios';
import { API_PATH } from 'utils/const'

// configure base url
const instance = axios.create({
  baseURL: `${API_PATH}/` ,
  headers: {
    'Authorization': 'Bearer 1|36zzLzt86Njsinb0UB4OmxUENiIv1ItGQIC55q235e4kBppqpid1Lfm80uymR6JhCHcrAS5jgENeJ05x',
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
