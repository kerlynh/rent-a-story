import { ReactNode, useEffect } from "react";
import { useLoginStore } from "../store/userStore";
import { useTranslation } from "react-i18next";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { setUserData } = useLoginStore((state) => state);
  const { i18n } = useTranslation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserData(JSON.parse(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) i18n.changeLanguage(lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
