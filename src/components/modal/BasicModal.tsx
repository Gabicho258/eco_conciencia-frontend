// BasicModal.tsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './_BasicModal.scss'

interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  content: React.ReactNode;
}

const BasicModal: React.FC<BasicModalProps> = ({ open, handleClose, content }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="basic-modal">
        {content}
      </Box>
    </Modal>
  );
}

export default BasicModal;
