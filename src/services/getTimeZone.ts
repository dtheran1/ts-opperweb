import { Axios } from './index'
interface  TimeZone {
  timezone: string
}
export const getTimezone = async (): Promise<TimeZone> => {
  return await Axios().get('timezone')
    .then(res => res.data)
}
