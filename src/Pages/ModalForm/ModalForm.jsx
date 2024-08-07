import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const ModalForm = ({ isModalOpen, closeModal }) => {
    const [open, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [inputNumber, setInputNumber] = useState('')

    const modalHandler = (e) => {
        e.preventDefault()
        setOpen(open => !open)
        setInputValue('')
        setInputNumber('')
        closeModal(false)
    }

    return (
        <div>
            <div className={`modal-form ${isModalOpen ? 'modal-form-open' : ''}`}>
                <form autoComplete='off' onSubmit={modalHandler} className="phone-right2">
                    <h4 className="modal-form-title">O'z ma'lumotlaringizni qoldiring</h4>

                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} id='inputt' required type="text" placeholder='Ismingiz...' className="phone-name" />
                    <input value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} id='inputt2' required type="number" placeholder='+998' className="phone-name" />
                    <button type='submit' className="phone-btn">Darsga yozilish</button>
                </form>

            </div>
            <Modal setIsOpen={setOpen} isOpen={open} />
        </div>
    );
}

export default ModalForm;
