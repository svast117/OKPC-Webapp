import React from 'react';
import './modal.css'

const Modal = ({source, onClose, isVisible}) => {
    console.log("Image", source)

    if(!isVisible) {
        return null;
    }

    const handleOutSideClick = (event) => {
        if (event.target.className === 'modal') {
            onClose();
        }
    };

    return (
        <div className="modal" onClick={handleOutSideClick}>
            <div className="modal-content">
                <span className="closeModal" onClick = {onClose}></span>
                <img src={source} alt={source} className='modal-image'/>
            </div>
        </div>
    );
};

export default Modal;
