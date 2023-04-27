import axios from 'axios'
export const Api = () => {
  return axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?offset=0',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}
