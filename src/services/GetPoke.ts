import { Axios } from './index'

export const getPokes = () => {
  return Axios().get('/')
}