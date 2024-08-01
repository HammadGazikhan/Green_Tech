
import axios from 'axios'


const serverAPI =  axios.create({
    // baseURL: `${process.env.REACT_APP_FE_URL}`,
    baseURL: `http://127.0.0.1:8000/`,
  });
  
export default serverAPI;