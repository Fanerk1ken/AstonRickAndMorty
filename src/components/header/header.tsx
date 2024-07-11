import { HStack, Text } from "rsuite";
import { AuthModal } from "../modals";
import { useState } from "react";
import MainLogo from "../main-logo/main-logo.tsx";
import styles from "../header/header.module.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div className={styles.headerContainer}>
      <HStack justifyContent="space-between" alignItems="center">
        <HStack alignItems="center" spacing={10}>
          <MainLogo className={styles.logo} />
          <Text className={styles.navText}>Favorite</Text>
          <Text className={styles.navText}>History</Text>
        </HStack>

        <HStack>
          <Text onClick={openModal} className={styles.signInText} size={22}>
            Sign in
          </Text>
        </HStack>
      </HStack>
      <AuthModal open={open} onClose={closeModal} />
    </div>
  );
};

export default Header;
