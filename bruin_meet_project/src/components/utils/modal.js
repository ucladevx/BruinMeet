import React from 'react';
import '../../styles/modal.css';

const Modal = ({ onClose, children }) => (
  <div className='modal' onClick={onClose}>
    {React.Children.map(children, (child, i) => {
      if (i === 0)
        return React.cloneElement(child, {
          onClick: (e) => {
            e.stopPropagation();
          }
        });
      return child;
    })}
  </div>
)

export default Modal;
