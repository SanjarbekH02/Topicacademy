import React, { useState } from 'react';
import './Adven.css'
import messeg from '../../img/messeg.png'
import reketa from '../../img/raketa.png'
import money from '../../img/money.png'
import diplomat from '../../img/diplomat.png'
import nishon from '../../img/nishon.png'
import key from '../../img/key.png'
import ModalForm from '../ModalForm/ModalForm';


const Adven = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const modalOpenHandler = () => {
        setModalOpen(x => !x)

    }

    return (
        <div className='adven'>
            <h5 className="adven-title">TOPIK academy aniq siz uchun agar siz:</h5>
            <div className="adven-block-top">
                <div className="adven-card">
                    <img src={messeg} alt="" className="adven-card-img" />
                    <div className="adven-card-span"><span className="child">Qisqa</span> muddat ichida Koreys tilida gapirishni istaysiz</div>
                </div>

                <div className="adven-card">
                    <img src={reketa} alt="" className="adven-card-img" />
                    <div className="adven-card-span">Koreys tili o’rganib o’z <span className="child">karyerangizni</span> qurmoqchisiz</div>
                </div>

                <div className="adven-card">
                    <img src={money} alt="" className="adven-card-img" />
                    <div className="adven-card-span">Topik sertifikatini olib universitetlariga <span className="child">GRANT</span> yutmoqchisiz</div>
                </div>



                <div className="adven-card">
                    <img src={diplomat} alt="" className="adven-card-img" />
                    <div className="adven-card-span">Janubiy Koreya davlatida <span className="child">o’qish</span> va <span className="child">ishlash</span> uchun ketmoqchisiz</div>
                </div>

                <div className="adven-card">
                    <img src={nishon} alt="" className="adven-card-img" />
                    <div className="adven-card-span">Koreys tilini o’rta darajda bilasiz va darajangizni <span className="child">oshirmoqchisiz</span></div>
                </div>

                <div className="adven-card">
                    <img src={key} alt="" className="adven-card-img" />
                    <div className="adven-card-span">Ko’p yillardan buyon o’qib ham <span className="child">natijaga</span> chiqa olmayapsiz</div>
                </div>
            </div>

            <div className="adven-btn">
                <button onClick={modalOpenHandler} className='add-btn'>HA, BU MEN</button>
            </div>

            <ModalForm closeModal={setModalOpen} isModalOpen={modalOpen}  />

        </div>
    );
}

export default Adven;
