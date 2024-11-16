import { User, UserData } from "../../types/userType";
import { jwtDecode } from "jwt-decode";

export const adaptLoginResponse = (response: User): UserData | undefined => {
  if (response) {
    const decodedToken = jwtDecode(import.meta.env.VITE_TOKEN) as UserData;
    localStorage.setItem("token", JSON.stringify(decodedToken));
    return decodedToken;
  }
  throw new Error("Usuário ou senha inválidos");
};
