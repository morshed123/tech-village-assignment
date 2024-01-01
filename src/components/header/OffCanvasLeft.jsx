import React, { useState } from 'react';
import './OffCanvasLeft.css';


const OffCanvasLeft = ({ children, isOpen, onClose }) => {
  return (
    <div className={`offcanvas__left ${isOpen ? 'open' : ''}`}>
      <div className="overlay" onClick={onClose}></div>
      <div className="menu">
        <button className="btn__left__close" onClick={onClose}>&times;</button>
        {children}

      </div>
    </div>
  );
};

export default OffCanvasLeft;
