import { LegalPerson, Natural, ResponseLegalPerson, ResponseNatural } from '../model/user'
import { Axios } from './index'
export const registerUser = async (person: LegalPerson | Natural): Promise<ResponseLegalPerson | ResponseNatural> => {
  const res = await Axios().post('register', person)
  return res.data
}
