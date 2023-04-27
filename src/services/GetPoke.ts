import { Api } from './index'

export const getPokes = () => {
  return Api().get('/')
}