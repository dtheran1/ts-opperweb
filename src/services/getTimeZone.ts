import axios from 'axios'
export const getTimezone = () => {
  return axios.get('https://front.opperdev.com/api/timezone')
    .then(res => res.data)
}
