import PropTypes from "prop-types";
import Modal from "react-modal";

const ReusableModal = ({ isOpen, onClose, children }) => {
  const styles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={styles}>
      {children}
    </Modal>
  );
};

ReusableModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ReusableModal;
