import clsx from "clsx";
import type { FC, MouseEvent } from "react";
import { useRef, useEffect, useCallback } from "react";

import * as classes from "./Modal.module.scss";
import type { ModalProps } from "./Modal.props";

import Portal from "@/shared/ui/portal";

const Modal: FC<ModalProps> = ({ isOpen, onClose, portalId, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = useCallback(() => {
    const ANIMATION_DELAY_MS = 150;

    modalRef.current.classList.add(classes.modal_close);

    setTimeout(() => {
      modalRef.current.classList.remove(classes.modal_close);
      onClose();
    }, ANIMATION_DELAY_MS);
  }, [onClose]);

  const onEscDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", onEscDown);
    }

    return () => {
      return document.removeEventListener("keydown", onEscDown);
    };
  }, [isOpen, onEscDown]);

  return (
    <Portal containerId={portalId}>
      <section
        className={clsx(classes.modal, {
          [classes.modal_open]: isOpen,
        })}
        ref={modalRef}
        role="dialog"
      >
        <div
          className={classes.modal__overlay}
          data-testid="overlay"
          onClick={handleCloseModal}
        >
          <div className={classes.modal__content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </section>
    </Portal>
  );
};

export default Modal;
