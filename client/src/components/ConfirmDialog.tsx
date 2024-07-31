import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";

type ConfirmDialogProps = {
  confirm: boolean;
  onConfirm: (confirm: boolean) => void;
  onDelete: () => void;
};

export default function ConfirmDialog({
  confirm,
  onConfirm,
  onDelete,
}: ConfirmDialogProps) {
  const handleClose = () => {
    onConfirm(false);
  };

  const handleAgree = () => {
    onConfirm(false);
    onDelete();
  };

  return (
    <Dialog
      open={confirm}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Ban co Muon Xoa San Pham ?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Khong the khoi phuc san pham da xoa !
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonCancel onClick={handleClose}>Cancel</ButtonCancel>
        <ButtonCancel onClick={handleAgree} autoFocus sx={{backgroundColor: 'green'}}>
          OK
        </ButtonCancel>
      </DialogActions>
    </Dialog>
  );
}



const ButtonCancel = styled(Button)(
  () => `
  background-color: #000;
  color: #fff;
  &:hover {
    background-color: #000;
    opacity: 0.6;
  }
  `
);
