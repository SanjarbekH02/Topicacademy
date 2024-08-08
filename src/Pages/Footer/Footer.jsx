import React from 'react';
import FooterLogo from '../../img/footer-logo.svg'
import CallImg from '../../img/call.svg'
import TgImg from '../../img/tg.svg'
import instaImg from '../../img/insta.svg'
import YoutubeImg from '../../img/youtube.svg'
import footerImg from '../../img/footer.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-block container">
                <a href="#">
                    <img src={FooterLogo} alt="logo img" />
                </a>

                <ul className="footer-list">
                    <li className="footer-item">
                        <a href="#selection" className="footer-link">Nega biz</a>
                    </li>
                    <li className="footer-item">
                        <a href="#natijalar" className="footer-link">Natijalar</a>
                    </li>
                    <li className="footer-item">
                        <a href="#course" className="footer-link">Kurslar</a>
                    </li>
                    <li className="footer-item">
                        <a href="#savollar" className="footer-link">Savollar</a>
                    </li>
                </ul>

                <div className="myAdress">
                    <a href="#">
                        <img src={CallImg} alt="img" />
                    </a>
                    <a href="#">
                        <img src={TgImg} alt="img" />
                    </a>
                    <a href="#">
                        <img src={instaImg} alt="img" />
                    </a>
                    <a href="#">
                        <img src={YoutubeImg} alt="img" />
                    </a>
                </div>
            </div>

            <img className='footer-img ' src={footerImg} alt="img" />
        </div>
    );
}

export default Footer;
