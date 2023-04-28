import { LegalPerson, Natural, ResponseLegalPerson, ResponseNatural } from '../model/user'
import { Axios } from './index'
export const RegisterUser = async (person: LegalPerson | Natural): Promise<ResponseLegalPerson | ResponseNatural> => {
  return await Axios().post('register', person)
}




