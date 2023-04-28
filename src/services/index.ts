import axios from 'axios'
export const Axios = () => {
  return axios.create({
    baseURL: `https://front.opperdev.com/api/`,
    headers: {
      Accept: 'application/json',
    }
  })
}
