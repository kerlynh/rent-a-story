import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";
import { Popover } from "../../../../../components/Popover/Popover";
import { Input } from "../../../../../components/Input/Input";
import { ChangeEvent, useRef, useState } from "react";
import { useBookSearchStore } from "../../../../../store/booksSearchStore";
import { Button } from "../../../../../components/Button/Button";
import { useTranslation } from "react-i18next";

interface SearchProps {
  className?: string;
}

export function Search({ className }: SearchProps) {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const {
    searchBy,
    available,
    setPage,
    setLimit,
    setSearchBy,
    setSearchTerm,
    setAvailable,
  } = useBookSearchStore((state) => state);
  const [switchType, setSwitchType] = useState(searchBy === "title");

  const label = { inputProps: { "aria-label": "Switch type" } };

  function toggleMenu() {
    setOpen((prevOpen) => !prevOpen);
  }

  function onSwitchChange(event: ChangeEvent<HTMLInputElement>) {
    setSwitchType(event.target.checked);
  }

  function onSearchAvailable(event: ChangeEvent<HTMLInputElement>) {
    setAvailable(event.target.checked);
  }

  function onClearSearch() {
    setInputValue("");
    setPage(0);
    setLimit(8);
    setSearchTerm("");
  }

  function onSearch() {
    if (inputValue) {
      setPage(0);
      setLimit(8);
      setSearchBy(!switchType ? "title" : "author");
      setSearchTerm(inputValue);
    }
  }

  return (
    <div className={`${className}`}>
      <Input
        label={`${t("search")}`}
        value={inputValue}
        isSearch
        icon={"Close"}
        iconPosition={"right"}
        onChange={setInputValue}
        onClick={onClearSearch}
      />
      <div className="flex border-y border-r border-gray-400 rounded-e-lg pr-2 py-1 gap-2">
        <Button
          variant="default"
          onClick={onSearch}
          icon="Search"
          iconPosition="only"
        />
        <Divider orientation="vertical" sx={{ color: "#9ca3af" }} />
        <div className="relative w-auto space-y-3">
          <Button
            buttonRef={buttonRef}
            variant="ghost"
            onClick={toggleMenu}
            icon="FilterAlt"
            iconPosition="only"
          />
          <Popover
            menuRef={menuRef}
            buttonRef={buttonRef}
            setOpen={setOpen}
            className={`${open ? "visible opacity-100 transition-opacity duration-300" : "hidden opacity-0"} absolute md:left-1/2 md:transform md:-translate-x-1/2 right-[-23%]`}
          >
            <FormGroup>
              <div className="flex items-center space-x-2">
                <Typography>{t("title")}</Typography>
                <Switch
                  {...label}
                  color="warning"
                  onChange={onSwitchChange}
                  value={searchBy === "author"}
                />
                <Typography>{t("author")}</Typography>
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    value={available}
                    onChange={onSearchAvailable}
                    color="warning"
                  />
                }
                label={t("available")}
              />
            </FormGroup>
          </Popover>
        </div>
      </div>
    </div>
  );
}
