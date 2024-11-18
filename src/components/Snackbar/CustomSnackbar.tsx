import {
  IconButton,
  Snackbar,
  SnackbarCloseReason,
  SnackbarContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

export interface CustomSnackbarProps {
  bgColor?: string;
  vertical?: "top" | "bottom";
  horizontal?: "left" | "right";
  message: string | null;
  success: boolean;
  setMessage: (v: string | null) => void;
  setSuccess: (v: boolean) => void;
}

export function CustomSnackbar({
  bgColor = "tomato",
  vertical = "top",
  horizontal = "right",
  message,
  success,
  setMessage,
  setSuccess,
}: CustomSnackbarProps) {
  const { t } = useTranslation();
  const onClose = (_: any, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") return;
    setSuccess(false);
    setMessage(null);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={onClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={!success && !!message}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical, horizontal }}
    >
      <SnackbarContent
        style={{
          backgroundColor: bgColor,
        }}
        message={message && <span id="client-snackbar">{t(message)}</span>}
        action={action}
      />
    </Snackbar>
  );
}
