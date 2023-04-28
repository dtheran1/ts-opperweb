import axios from 'axios'

// https://front.opperdev.com/api/register Register natural person
// https://front.opperdev.com/api/register Register legal person
// https://front.opperdev.com/api/login
// https://front.opperdev.com/api/v1/me get user
export const Axios = () => {
  return axios.create({
    baseURL: `https://front.opperdev.com/api/`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}
