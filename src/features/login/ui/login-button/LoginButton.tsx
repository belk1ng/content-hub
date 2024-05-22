import { useState } from "react";
import type { FC } from "react";

import * as classes from "./LoginButton.module.scss";
import LoginForm from "../login-form";

import LoginIcon from "@/shared/assets/icons/login.svg";
import Button from "@/shared/ui/button";
import Modal from "@/shared/ui/modal";

const LoginButton: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onModalClose = () => {
    setModalOpen(false);
  };

  const onModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Button className={classes.login} onClick={onModalOpen} variant="action">
        <LoginIcon />
      </Button>
      <Modal isOpen={modalOpen} onClose={onModalClose} portalId="login-form">
        <LoginForm key={modalOpen.toString()} />
      </Modal>
    </>
  );
};

export default LoginButton;
