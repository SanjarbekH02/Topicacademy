import React from 'react';
import './Modal.css'
import Done from '../../img/donne.jpg'
import Close from '../../img/close.png'

const Modal = ({isOpen, setIsOpen}) => {
    const modalClose = () =>{
        setIsOpen(false)
    }

    return (
        <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-content">
                <img onClick={modalClose} src={Close} alt="" className="close" />
                <img className='done' src={Done} alt="" />
                <p className="modal-text">Sizning savolingiz, yozib olindi, tez orada siz bilan mutaxassisimiz aloqaga chiqadi</p>
            </div>
        </div>
    );
}

export default Modal;
