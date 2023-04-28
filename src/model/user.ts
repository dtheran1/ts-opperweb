export interface LegalPerson {
  telephone: string,
  razon_social: string,
  type_user_id: number,
  verify_tc: string,
  email: string,
  password: string,
  password_confirmation: string,
  apiKey: string,
  NIT: string
  utcTimeStamp: string
  signature: string
}

export interface ResponseLegalPerson {
  user: {
    telephone: string,
    NIT: string,
    razon_social: string,
    type_user_id: number,
    verify_tc: boolean,
    email: string,
    password: string,
    password_confirmation: string
    updated_at: string;
    created_at: string;
    id: number;
    profile_photo_url: string;
  },
  token: string
}

export interface Natural {
  name: string
  lastname: string
  telephone: string
  identy_document: string
  type_user_id: string
  verify_tc: string
  password: string
  password_confirmation: string
  email: string
  apiKey: string
  utcTimeStamp: string
  signature: string
}

export interface ResponseNatural extends Omit<Natural, 'name' | 'lastName' | 'telephone' | 'identy_document' | 'type_user_id'| 'email'>{
  user: {
    updated_at: string;
    created_at: string;
    id: number;
    profile_photo_url: string;
  },
  token: string
}

export interface UserLogin {
  email: string
  password: string;
  apiKey: string;
  utcTimeStamp: string;
  signature: string;
}

export interface ResponseToken {
  token: string
}

export interface GetDataAuth {
  apiKey: string;
  utcTimeStamp: string;
  signature: string;
}

export interface ResponseGetUser {
  name: string;
}

export interface getCategories extends GetDataAuth {}

export interface Category {
  id: number;
  nombre: string;
  created_at: string;
  updated_at: string;
}

export interface ResponseCategories {
  categorias: Category[]
}

export interface CreateCategory {
  nombre: string;
  apiKey: string;
  utcTimeStamp: string;
  signature: string;
}

export interface ResponseCreateCategory {
  categoria: Category
}

export interface UpdateCategory {
  nombre: string;
  apiKey: string;
  utcTimeStamp: string;
  signature: string;
}
