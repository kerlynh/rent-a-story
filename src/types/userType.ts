export type User = {
  username: string;
  password: string;
};

export type UserData = User & {
  name: string;
};
