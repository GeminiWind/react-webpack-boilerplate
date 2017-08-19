import axios from 'axios'

let axiosInstannce = axios.create({
  baseURL: 'PUT-YOUR_SERVER_URL_HERE',
});

export default axiosInstannce