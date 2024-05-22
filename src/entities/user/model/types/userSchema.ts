export interface User {
  id: number;
  username: string;
  access_token: string;
  refresh_token: string;
}

export interface UserSchema {
  user?: User;
}
