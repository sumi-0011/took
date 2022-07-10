export interface UserAuthData {
  email: string;
  password: string;
}

export interface SignUpData extends UserAuthData {
  checkPassword: string;
  name: string;
}
