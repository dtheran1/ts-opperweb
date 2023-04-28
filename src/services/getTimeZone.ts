import { Axios } from './index'
interface  TimeZone {
  timezone: string
}
export const getTimezone = async (): Promise<TimeZone> => {
  const res = await Axios().get('timezone')
  return res.data
}
