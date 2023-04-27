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

export interface User {
  email: string,
  password: string
}
