import axios from 'axios';
const HOST_ADDRESS = 'http://10.0.2.2:3000';

export const getAxios = async (address: string) => {
  const response = await axios
    .get(`${HOST_ADDRESS}/${address}`)
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  return response.data;
};

export const postAxios = async (address: string, data: any) => {
  // console.log('post data', `${HOST_ADDRESS}/${address}`, data);
  const response = await axios
    .post(`${HOST_ADDRESS}/${address}`, data)
    .then(res => {
      console.log('result', res);
      return res.data;
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  return response.data;
};
