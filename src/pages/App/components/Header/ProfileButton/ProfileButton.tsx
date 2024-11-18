import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRef, useState } from "react";
import { Popover } from "../../../../../components/Popover/Popover";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../../../../../components/Avatar/Avatar";
import { useLoginStore } from "../../../../../store/userStore";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

export function ProfileButton() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const user = useLoginStore((state) => state.user);

  function toggleMenu() {
    setOpen((prevOpen) => !prevOpen);
  }

  function onClose() {
    navigate("/login");
  }

  function onLogout() {
    setOpen(false);
    localStorage.removeItem("token");
    navigate(0);
  }

  const login = [
    {
      label: t("login"),
      slug: "",
      icon: LoginIcon,
      onClick: onClose,
    },
  ];
  const logged = [
    {
      label: t("logout"),
      slug: "",
      icon: LogoutIcon,
      onClick: onLogout,
    },
  ];

  const list = user ? logged : login;

  const languages = [
    {
      label: t("portuguese"),
      slug: "pt-BR",
      icon: "./assets/images/brazil.webp",
      onClick: () => {},
    },
    {
      label: t("english"),
      slug: "en",
      icon: "./assets/images/usa.webp",
      onClick: () => {},
    },
  ];

  function onChangeLanguage(lang: string) {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  return (
    <>
      <div className="relative space-y-2">
        <button
          ref={buttonRef}
          type="button"
          className={`${user ? "w-[42px] sm:w-12 overflow-hidden" : "w-[80px] sm:w-[86px] p-3 pl-5"} h-[42px] sm:h-12  rounded-3xl border border-gray-300 flex items-center justify-center gap-2 hover:shadow-md transform duration-200 bg-white`}
          onClick={toggleMenu}
          data-testid="profile-button"
        >
          {user ? (
            <Avatar userName={user.name} />
          ) : (
            <>
              <MenuIcon fontSize="medium" sx={{ color: "#757575" }} />
              <AccountCircleIcon fontSize="large" sx={{ color: "#757575" }} />
            </>
          )}
        </button>
        <Popover
          menuRef={menuRef}
          buttonRef={buttonRef}
          setOpen={setOpen}
          className={`${open ? "visible opacity-100 transition-opacity duration-300 right-0 z-[2]" : "hidden opacity-0"}`}
        >
          <div>
            {list.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className="w-full h-full flex bg-white hover:bg-gray-100/50 transform duration-150 p-2 rounded-md space-x-2 items-center"
                onClick={item.onClick}
                data-testid={`profile-${item.label}`}
              >
                <item.icon fontSize="small" />
                <span className="text-base text-gray-700`">{item.label}</span>
              </button>
            ))}
          </div>
          <div className="space-y-2">
            <Divider />
            <div className="w-full flex space-x-1">
              {languages.map((language, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onChangeLanguage(language.slug)}
                  data-testid={language.slug}
                  className="w-8 h-5 flex items-center space-x-3 rounded-lg overflow-hidden hover:shadow-sm"
                >
                  <img
                    src={language.icon}
                    alt={language.label}
                    className="object-cover w-full h-ful"
                  ></img>
                </button>
              ))}
            </div>
          </div>
        </Popover>
      </div>
    </>
  );
}
