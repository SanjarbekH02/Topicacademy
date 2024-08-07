import React, { useState } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import './Grant.css'
import logoSchol from '../../img/schol-logo.jpg'
import introVideo from '../../img/video.mp4';
import 'react-html5video/dist/styles.css';
import topic1 from '../../img/topic.png'
import ModalForm from '../ModalForm/ModalForm';

const Grant = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const modalOpenHandler = () => {
        setModalOpen(x => !x)

    }

    return (
        <div className='grant'>
            <h3 className="grant-title">Koreya Universitetlariga 100% gacha grant yutish imkoniyati</h3>
            <div className="grant-block">
                <div className="grant-left">
                    <img src={logoSchol} alt="" className="logo-schol" />
                </div>

                <div className="grant-right">
                    <div className="grant-right-block">
                        <h5 className="grant-right-title">GKS (Global Korean Scholarship) <span className="child">$70.000</span> lik Grant</h5>
                        <p className="grant-desc">Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning Xalqaro ta'lim bo'yicha milliy instituti tomonidan <span className="child">xorijiy</span> talabalarning Koreyada bakalavr va magistratura bosqichida <span className="child">100% gacha to’liq grant </span>
                            va oylik <span className="child">stipendiya</span> olish imkoniyatingiz bor</p>
                    </div>

                    <div className="grant-right-block">
                        <h5 className="grant-right-title">GKS granti sizga nima beradi</h5>
                        <ul className="grant-list">
                            <li className="grant-desc">Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan qaytish xarajatlari qoplanadi.</li>
                            <li className="grant-desc">Koreyaga yetib borganda joylashib olish uchun bir martalik to'lovberiladi. Miqdori - 200 000 Koreya voni (taxminan 157 AQSh dollari).</li>
                            <li className="grant-desc">Til kursi va universitetning kontrak to'lovi to'liq to'lab beriladi (faqat magistr va doktorantlarga)... <span className="child"> ko’proq</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <Video className="videos"  loop>
                    <source src={introVideo} type='video/webm' />
                </Video>
                <div className="video-title">GKS granti haqida to’liq siz uchun tayyorlagan video suhbatimizda bilib oling! ...</div>
            </div>
            <div className="grant-bottom">
                <h3 className="grant-title">Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda yordam beramiz</h3>

                <div className="bottom-block">
                    <div className="bottom-block-left">
                        <h5 className="bottom-left-title"><span className="child">TOPIK academy consulting</span> jamoasi sizga universitet tanlash, visa olish va grant yutishingizda yaqindan ko’maklashadi</h5>
                        <p className="bottom-desc">Ko’proq ma’lumot olish uchun bepul konsultatsiyaga yoziling!</p>
                        <button onClick={modalOpenHandler} className="bottom-btn">ARIZA QOLDIRISH</button>
                    </div>

                    <div className="slider3">
                        <div className="slide-truck3">
                            <div className="slide3">
                                <img clasName="swiper-img3" src={topic1} alt="img " />
                            </div>
                            <div className="slide3">
                                <img clasName="swiper-img3" src={topic1} alt="img" />
                            </div>
                            <div className="slide3">
                                <img clasName="swiper-img3" src={topic1} alt="img" />
                            </div>
                            <div className="slide3">
                                <img clasName="swiper-img3" src={topic1} alt="img" />
                            </div>
                            <div className="slide3">
                                <img clasName="swiper-img3" src={topic1} alt="img" />
                            </div>
                            <div className="slide3">
                                <img clasName="swiper-img3" src={topic1} alt="img" />
                            </div>
                            <div className="slide3">
                                <img clasName="swiper-img3" src={topic1} alt="img" />
                            </div>
                            <div className="slide3">
                                <img clasName="swiper-img3" src={topic1} alt="img" />
                            </div>
                            <div className="slide3">
                                <img clasName="swiper-img3" src={topic1} alt="img" />
                            </div>
                            <div className="slide3">
                                <img clasName="swiper-img3" src={topic1} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalForm closeModal={setModalOpen} isModalOpen={modalOpen} />
        </div>
    );
}

export default Grant;
