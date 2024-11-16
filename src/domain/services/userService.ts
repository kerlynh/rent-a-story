import { useMutation } from "@tanstack/react-query";
import { User } from "../../types/userType";
import { login } from "../api/user";
import { useLoginStore } from "../../store/userStore";

export const useLogin = () => {
  const { setUserData, setError, setSuccess } = useLoginStore((state) => state);
  return useMutation({
    mutationFn: (body: User) => login(body),
    onSuccess: (user) => {
      if (user) {
        setUserData(user);
        setSuccess(true);
        setError(null);
      }
    },
    onError: (error) => {
      setSuccess(false);
      setError(error.message);
    },
  });
};
