import { FC, ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed  -translate-y-[70%] -translate-x-1 w-[70%] h-[90%]  bg-[#00000080] flex items-center  justify-center z-[1000] shadow-[0_0_10px_theme('colors.blue.700')]"
    // style={{
    //   position: 'fixed',
    //   top: 0,
    //   left: 0,
    //   width: '100%',
    //   height: '100%',
    //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   zIndex: 1000,
    // }}
    >
      <div className='bg-[#111] px-10 rounded shadow-lg w-[100%] h-[100%]'
    //   style={{
    //     backgroundColor: '',
    //     padding: '20px',
    //     borderRadius: '8px',
    //     boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    //   }}
      >
        {children}
        <button onClick={onClose} className='px-4 py-2 rounded  font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] hover:scale-110 ease-in-out hover:shadow-[0_0_10px_blue]'>Close</button>
      </div>
    </div>
  );
};

export default Modal;
