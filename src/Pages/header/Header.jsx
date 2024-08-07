import React from 'react';
import './Header.css'
import mam from '../../img/ima.png'
import head from '../../img/mainimg.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div className="head-left">
                <p className="left-month">--3 oyda Koreys tilida gapirishni boshlang</p>
                <div className="head-title">Janubiy Koreys Universitetlarida 100% gacha grant asosida o'qish imkoniyati</div>
                <div className="left-block">
                    <div className="block-left">
                        <img src={mam} alt="img" className="block-img" />
                        <p className="block-desc">5 oyda Topikdan 6 darajagacha olishda yordam beramiz</p>
                    </div>

                    <div className="block-left">
                        <img src={mam} alt="img" className="block-img" />
                        <p className="block-desc">Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish va ishlash imkoniyati</p>
                    </div>
                </div>
                <div className="head-right">
                <img className='right-img' src={head} alt="img" />
            </div>
                <div className="button-block">
                    <button className="head-btn">BEPUL DARSGA YOZILISH</button>
                    <p className="btn-desc">Birinchi darsga bepul yoziling!</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
