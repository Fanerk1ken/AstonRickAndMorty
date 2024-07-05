import { HStack, Text } from "rsuite";
import { AuthModal } from "../modals";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div>
      <HStack justifyContent="space-between" alignItems="center">
        <HStack alignItems="center" spacing={10}>
          <Text size={22}>Дого</Text>
          <Text size={22}>Избранное</Text>
          <Text size={22}>История</Text>
        </HStack>

        <HStack>
          <Text onClick={openModal} size={22}>
            Войти
          </Text>
        </HStack>
      </HStack>
      <AuthModal open={open} onClose={closeModal} />
    </div>
  );
};

export default Header;
