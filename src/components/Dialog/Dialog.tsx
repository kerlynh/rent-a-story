import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Button } from "../Button/Button";
import { CustomSnackbar } from "../Snackbar/CustomSnackbar";
import { useLoginStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface CustomizedDialogsProps {
  title: string;
  description: string;
  price: string;
  author: string;
}

export function CustomizedDialogs({
  title,
  description,
  price,
  author,
}: CustomizedDialogsProps) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const user = useLoginStore((state) => state.user);
  const navigate = useNavigate();
  const [t] = useTranslation();

  function onClickOpen() {
    setOpen(true);
  }
  function onClose() {
    setOpen(false);
  }

  function onConfirm() {
    onClose();
    setTimeout(() => {
      setMessage(t("book_rented"));
      setSuccess(false);
    }, 300);
  }

  return (
    <>
      <Button
        variant="default"
        color="secondary"
        text={t("rent_now")}
        data-testid="details-button"
        onClick={onClickOpen}
      />
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {user ? title : "Oops!"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>

        {user ? (
          <>
            <DialogContent dividers className="space-y-5">
              <p>{description}</p>
              <p>
                <span className="font-bold">{t("price")}:</span> {price}
              </p>
              <p>
                <span className="font-bold">{t("author")}:</span> {author}
              </p>
            </DialogContent>
            <DialogActions>
              <Button
                variant={"outline"}
                text={t("cancel")}
                onClick={onClose}
              />
              <Button variant={"default"} text={t("yes")} onClick={onConfirm} />
            </DialogActions>
          </>
        ) : (
          <DialogContent dividers className="space-y-5">
            <p>{t("you_need_logged")}</p>
            <DialogActions>
              <Button
                variant={"outline"}
                text={t("logout")}
                color="secondary"
                onClick={onClose}
              />
              <Button
                variant={"default"}
                text={t("login")}
                color="secondary"
                onClick={() => navigate("/login")}
              />
            </DialogActions>
          </DialogContent>
        )}
      </BootstrapDialog>
      <CustomSnackbar
        bgColor="green"
        message={message}
        success={success}
        setMessage={setMessage}
        setSuccess={setSuccess}
      />
    </>
  );
}
