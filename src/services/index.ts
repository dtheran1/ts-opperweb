import axios from 'axios'

// https://front.opperdev.com/api/register Register natural person
// https://front.opperdev.com/api/register Register legal person
// https://front.opperdev.com/api/login
// https://front.opperdev.com/api/timezone
export const Axios = () => {
  return axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?offset=0',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}
