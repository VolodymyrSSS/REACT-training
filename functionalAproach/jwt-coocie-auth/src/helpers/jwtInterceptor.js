import axios from 'axios';

const jwtInterceptor = axios.create({});

jwtInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if(error.response.status === 401) {
      axios.get("http://localhost:4000/refresh-token", {
        withCredentials: true
      }).catch((refreshTokenAPIError) => {
        /* In JavaScript code that is running both on the server and on the client (browser), it is common practice to guard against with an if clause that checks if window is defined. "Window" is the root object provided by the browser for all the APIs that are provided by the browser. */
        if (typeof window !== 'undefined') {
          console.log('we are running on the client')
          localStorage.removeItem("userProfile");
        } else {
          console.log('we are running on the server or web Storage is not supported in this environment');
        }
        
        return Promise.reject(refreshTokenAPIError);
      });

      return axios(error.config);
    }
    return Promise.reject(error)
  }
);

export default jwtInterceptor;
