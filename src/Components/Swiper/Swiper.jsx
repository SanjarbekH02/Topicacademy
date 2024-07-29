import React from 'react';
import './Swiper.css'
import topic1 from '../../img/topic.png'
// import Swiper2 from './Swiper2';
// import topic2 from '../../img/topic2.jpg'
// import topic3 from '../../img/topic3.webp'
// import topic4 from '../../img/topic4.jpg'
// import topic5 from '../../img/topic5.webp'
// import topic6 from '../../img/topic6.jpg'
// import topic7 from '../../img/topic7.jpg'
// import topic8 from '../../img/topic8.jpg'
// import topic9 from '../../img/topic9.jpg'
// import topic10 from '../../img/topic10.jpg'

const Swiper = () => {
    return (
        <div className='swiper'>
            <div className="slider">
                <div className="slide-truck">
                    <div className="slide">
                        <img clasName="swiper-img" src={topic1} alt="img " />
                    </div>
                    <div className="slide">
                        <img clasName="swiper-img" src={topic1} alt="img" />
                    </div>
                    <div className="slide">
                        <img clasName="swiper-img" src={topic1} alt="img" />
                    </div>
                    <div className="slide">
                        <img clasName="swiper-img" src={topic1} alt="img" />
                    </div>
                    <div className="slide">
                        <img clasName="swiper-img" src={topic1} alt="img" />
                    </div>
                    <div className="slide">
                        <img clasName="swiper-img" src={topic1} alt="img" />
                    </div>
                    <div className="slide">
                        <img clasName="swiper-img" src={topic1} alt="img" />
                    </div>
                    <div className="slide">
                        <img clasName="swiper-img" src={topic1} alt="img" />
                    </div>
                    <div className="slide">
                        <img clasName="swiper-img" src={topic1} alt="img" />
                    </div>
                    <div className="slide">
                        <img clasName="swiper-img" src={topic1} alt="img" />
                    </div>
                </div>
            </div>
            {/* <Swiper2 /> */}
        </div>
    );
}

export default Swiper;
