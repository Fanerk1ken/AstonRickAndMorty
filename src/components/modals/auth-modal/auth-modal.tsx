import { Button, Placeholder, Modal } from "rsuite";

type AuthModalType = {
  open: boolean;
  onClose: () => void;
};

const AuthModal = ({ open, onClose }: AuthModalType) => {
  return (
    <Modal keyboard={false} open={open} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Placeholder.Paragraph />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} appearance="primary">
          Ok
        </Button>
        <Button onClick={onClose} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthModal;
