import type { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: VoidFunction;
  portalId: string;
}
