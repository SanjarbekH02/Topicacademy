import React from 'react';
import './Course.css';
import card1 from '../../img/card1.png'
import card2 from '../../img/card2.png'
import card3 from '../../img/card3.png'

const Cource = () => {
    return (
        <div className='course'>
            <h3 className="grant-title">O’zingizga mos kursga ro’yxatdan o’ting</h3>
            <div className="course-block">
                <div className="course-card">
                    <img src={card1} alt="img" className="course-card-img" />
                    <div className="blocck">
                        <div className="card-intensive">
                            <span className="intensive-title">Intiensive </span>
                            <span className="intensive-month">Davomiyligi: 5 oy</span>
                        </div>
                        <p className="course-card-desc">Koreys tilini chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs.</p>

                        <div className="course-card-reg">
                            <button className="course-card-btn">RO'YXATDAN O'TISH</button>
                            <span className="card-sum">970.000 so’m /oy</span>
                        </div>
                    </div>

                </div>

                <div className="course-card">
                    <img src={card2} alt="img" className="course-card-img" />
                    <div className="blocck">
                        <div className="card-intensive">
                            <span className="intensive-title">Odatiy </span>
                            <span className="intensive-month">Davomiyligi: 5 oy</span>
                        </div>
                        <p className="course-card-desc">Haftada 3 kun 1.5 soatdan iborat odatiy Koreys tili darslari.</p>

                        <div className="course-card-reg">
                            <button className="course-card-btn">RO'YXATDAN O'TISH</button>
                            <span className="card-sum">560.000 so’m /oy</span>
                        </div>
                    </div>

                </div>

                <div className="course-card">
                    <img src={card3} alt="img" className="course-card-img" />
                    <div className="blocck">
                        <div className="card-intensive">
                            <span className="intensive-title">Individual </span>
                            <span className="intensive-month">Davomiyligi: 5 oy</span>
                        </div>
                        <p className="course-card-desc">O’qituvchidan individual dars olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar. Moslashuvchan grafik va individual yondashuv.</p>

                        <div className="course-card-reg">
                            <button className="course-card-btn">RO'YXATDAN O'TISH</button>
                            <span className="card-sum">970.000 so’m /oy</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Cource;
