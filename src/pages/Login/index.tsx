import { FormEvent, SyntheticEvent, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { useLogin } from "../../domain/services/userService";
import { User } from "../../types/userType";
import {
  IconButton,
  Snackbar,
  SnackbarCloseReason,
  SnackbarContent,
} from "@mui/material";
import { useLoginStore } from "../../store/userStore";
import CloseIcon from "@mui/icons-material/Close";

import logo from "/assets/images/rentastory_logo.webp";

export function Login() {
  const login = useLogin();
  const { error, success, setError, setSuccess } = useLoginStore(
    (state) => state
  );
  const [form, setForm] = useState<User>({
    username: "",
    password: "",
  });

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

  const handleClose = (
    event: SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") return;

    setSuccess(false);
    setError(null);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center p-5 space-y-5">
      <div className="max-w-[500px] w-full h-auto space-y-10 flex flex-col items-center border border-gray-200 rounded-lg p-6 shadow-lg">
        <div className="flex space-x-5 items-center">
          <div className="w-24 h-24 sm:w-36 sm:h-36 overflow-hidden rounded-full">
            <img
              src={logo}
              alt="Rent a Story logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1">
            <div className="flex space-x-2">
              <p className="flex items-center tracking-[-3px]">
                <span className="font-cinzel font-semibold text-5xl sm:text-6xl">
                  R
                </span>
                <span className="font-playfair text-3xl sm:text-4xl">ent</span>
              </p>
              <p className="flex items-center font-cinzel font-semibold text-3xl sm:text-4xl">
                A
              </p>
              <p className="flex items-center tracking-[-3px]">
                <span className="font-cinzel font-semibold text-5xl sm:text-6xl">
                  S
                </span>
                <span className="font-playfair text-3xl sm:text-4xl">tory</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1/6 h-[1px] bg-cyan-950"></div>
              <p className="font-cinzel text-xs text-center text-nowrap">
                Unlocking Stories
              </p>
              <div className="w-1/6 h-[1px] bg-cyan-950"></div>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="w-full space-y-5">
          <div className="flex flex-col space-y-2">
            <label htmlFor="username" className="text-sm">
              Username
            </label>
            <Input
              value={form.username}
              onChange={(e) => onChange(e, "username")}
              name="username"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-sm">
              Senha
            </label>
            <Input
              value={form.password}
              onChange={(e) => onChange(e, "password")}
              name="passsword"
            />
          </div>
          <div className="w-full h-auto flex justify-end">
            <Button
              text="Entrar"
              type="submit"
              variant="default"
              disabled={!form.username || !form.password}
            />
            <Snackbar
              open={!success && !!error}
              autoHideDuration={3000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <SnackbarContent
                style={{
                  backgroundColor: "tomato",
                }}
                message={<span id="client-snackbar">{error}</span>}
                action={action}
              />
            </Snackbar>
          </div>
        </form>
      </div>
    </main>
  );
}
