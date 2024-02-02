import { Children } from "react";
import Modal from "react-modal";

const ReusableModal = ({ isOpen, onClose, width, children }) => {
  const styles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: width || "50%",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onclose} style={styles}>
      {children}
    </Modal>
  );
};

export default ReusableModal;
