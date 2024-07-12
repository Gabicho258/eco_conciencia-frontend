import { useState } from 'react';
import { Login } from '../Login/Login';
import Register from '../Register/Register';
import BasicModal from '../../components/modal/BasicModal';

export default function HubHome() {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const handleOpen = (content: React.ReactNode) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <button onClick={() => handleOpen(<Login />)}>Iniciar sesión</button>
        <button onClick={() => handleOpen(<Register />)}>Registrarse</button>
      </div>
      <BasicModal open={open} handleClose={handleClose} content={modalContent} />
    </>
  );
}
