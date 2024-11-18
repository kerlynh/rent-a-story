import { FormEvent, useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { useLogin } from "../../domain/services/userService";
import { User } from "../../types/userType";
import { useLoginStore } from "../../store/userStore";
import { Logo } from "../../components/Logo/Logo";
import { CustomSnackbar } from "../../components/Snackbar/CustomSnackbar";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Login() {
  const login = useLogin();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { error, success, setError, setSuccess } = useLoginStore(
    (state) => state
  );
  const [form, setForm] = useState<User>({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function onChange(e: string, type: string) {
    setForm((prev: User) => ({ ...prev, [type]: e }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login.mutate({
      username: form.username,
      password: form.password,
    });
  }

  useEffect(() => {
    if (success) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center p-5 space-y-5">
      <div className="max-w-[500px] w-full h-auto space-y-10 flex flex-col items-center border border-gray-200 rounded-lg p-6 shadow-lg">
        <Logo />
        <form onSubmit={onSubmit} className="w-full space-y-5">
          <div className="flex flex-col space-y-2">
            <label htmlFor="username" className="text-sm">
              {t("username")}
            </label>
            <Input
              value={form.username}
              onChange={(e) => onChange(e, "username")}
              name="username"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-sm">
              {t("password")}
            </label>
            <Input
              value={form.password}
              onChange={(e) => onChange(e, "password")}
              name="passsword"
              type={showPassword ? "password" : "text"}
              icon={showPassword ? "VisibilityOff" : "Visibility"}
              iconPosition="right"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <div className="w-full h-auto flex justify-end">
            <Button
              text={`${t("login")}`}
              type="submit"
              variant="default"
              disabled={!form.username || !form.password}
            />
            <CustomSnackbar
              message={error}
              success={success}
              setMessage={setError}
              setSuccess={setSuccess}
            />
          </div>
        </form>
      </div>
    </main>
  );
}
