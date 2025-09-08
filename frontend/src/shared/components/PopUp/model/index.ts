import type { DialogHTMLAttributes } from "react";

export interface IPopUpProps extends Omit<DialogHTMLAttributes<HTMLDialogElement>, 'onClose'> {
  onClose?: () => void; // Новый проп для закрытия (без параметров)
}
