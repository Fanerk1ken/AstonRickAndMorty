import { useState } from "react";
import { Button, Modal } from "rsuite";
import MainLogo from "./../../main-logo/main-logo.tsx";
import styles from "./auth-modal.module.scss";
import { AuthModalType } from "./../../../types/modal-types.ts";
import SignIn from "./components/sign-in.tsx";
import SignUp from "./components/sign-up.tsx";

const AuthModal = ({ open, onClose }: AuthModalType) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Modal
      keyboard={false}
      open={open}
      onClose={onClose}
      dialogClassName={styles.modalBody}
      size="sm"
    >
      <Modal.Header className={styles.modalHeader}>
        <Button
          appearance="subtle"
          className={`${styles.modeButton} ${isLogin ? styles.active : styles.inactive}`}
          onClick={() => setIsLogin(true)}
        >
          Sign In
        </Button>
        <MainLogo className={styles.logo} />
        <Button
          appearance="subtle"
          className={`${styles.modeButton} ${!isLogin ? styles.active : styles.inactive}`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </Button>
      </Modal.Header>

      <Modal.Body>{isLogin ? <SignIn /> : <SignUp />}</Modal.Body>
    </Modal>
  );
};

export default AuthModal;
