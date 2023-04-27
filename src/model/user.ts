export interface Person {
  name: string,
  lastName: string,
  phone: number | null,
  dni: number | null,
  email: string,
  password: string,
  confirmPassword: string
}

export interface Legal extends Omit<Person, 'name' | 'lastName' | 'dni'> {
  companyName: string;
  nit: number | null;
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

export interface responseTestNatural extends Omit<Natural, 'name' | 'lastName' | 'telephone' | 'identy_document' | 'type_user_id'| 'email'>{
  user: {
    updated_at: string;
    created_at: string;
    id: number;
    profile_photo_url: string;
  },
  token: string
}

export interface userLogin {
  email: string
  password: string;
  apiKey: string;
  utcTimeStamp: string;
  signature: string;
}

export interface responseUserLogin {
  token: string
}

export interface getUser {
  apiKey: string;
  utcTimeStamp: string;
  signature: string;
}

export interface responseGetUser {
  name: string;
  // id: number;
  // lastname: string;
  // telephone: string;
  // identy_document: string;
  // NIT: null;
  // razon_social: null;
  // email: string;
  // email_verified_at: null;
  // type_user_id: number;
  // verify_tc: boolean;
  // current_team_id: null;
  // profile_photo_path: null;
  // created_at: string;
  // updated_at: string;
  // profile_photo_url: string;
}

export interface getCategories extends getUser {}

export interface Category {
  id: number;
  nombre: string;
  created_at: string;
  updated_at: string;
}

export interface responseCategories {
  categorias: Category[]
}

export interface CreateCategory {
  nombre: string;
  apiKey: string;
  utcTimeStamp: string;
  signature: string;
}

export interface responseCreateCategory {
  categoria: Category
}

export interface UpdateCategory {
  nombre: string;
  apiKey: string;
  utcTimeStamp: string;
  signature: string;
}

export interface User {
  email: string,
  password: string
}
