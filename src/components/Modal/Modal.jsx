import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'rgb(34,34,34)',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '90%',
  width: '90%'
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
};

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black opacity-70 z-50" style={OVERLAY_STYLES} />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-lg shadow-lg z-50" style={MODAL_STYLES}>
        <button className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-full m-2" onClick={onClose}>X</button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  );
}
