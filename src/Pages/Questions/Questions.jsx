import React, { useState } from 'react';
import './Questions.css'
import Modal from '../Modal/Modal';


function Questions() {
    const [selected, setSelected] = useState(null)
    const [open, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [inputNumber, setInputNumber] = useState('')

    const modalHandler = (e) => {
        e.preventDefault()
        setOpen(open => !open)
        setInputValue('')
        setInputNumber('')
    }

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    return (
        <div id='savollar' className='questions'>
            <h3 className="grant-title">Ko’p beriladigan savollar</h3>
            <div className="accordion-block">

                {
                    data.map((item, i) =>
                        <div className={`accordion ${selected == i ? 'accordion-active' : ''}`}>
                            <div onClick={() => toggle(i)} className={`accordion-title ${selected == i ? 'accordion-title-active' : ''}`}>
                                <h3 className='accord-title'>{item.title}</h3>
                                <span></span>
                            </div>
                            <div id='tab-1' className={`accordion-content ${selected == i ? 'accordion-content-active' : ''}`} >

                            </div>
                        </div>


                    )
                }
            </div>

            <div className="phone">
                <div className="phone-left">
                    <h3 className="phone-title">Savollaringiz qoldimi</h3>
                    <p className="phone-desc">Ma’lumotlaringizni qoldiring siz bilan bog’lanib barcha savollaringizga javob beramiz</p>
                </div>

                <form autoComplete='off' onSubmit={modalHandler} className="phone-right">
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} id='inputt' required type="text" placeholder='Ismingiz...' className="phone-name" />
                    <input value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} id='inputt2' required type="number" placeholder='+998' className="phone-name" />
                    <button type='submit' className="phone-btn">Savol berish</button>
                </form>
            </div>

            <Modal setIsOpen={setOpen} isOpen={open} />

        </div>
    );
}

const data = [
    {
        title: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?'
    },

    {
        title: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?'
    },

    {
        title: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?'
    },

    {
        title: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?'
    }
]

export default Questions;
