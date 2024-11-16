import { User, UserData } from "../../types/userType";
import { adaptLoginResponse } from "../adapters/userAdapter";
import { api } from "./api";

export async function login(body: User): Promise<UserData | undefined> {
  const response = await api.get("/user");
  const user = response.data.find(
    (u: User) => u.username === body.username && u.password === body.password
  );

  return adaptLoginResponse(user);
}
