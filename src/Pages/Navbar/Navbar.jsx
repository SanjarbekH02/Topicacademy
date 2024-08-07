import './navbar.css'
import logo from '../../img/logo.png'


function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-block">
                <a href="#" className="logoLink">
                    <img className='logo-image' src={logo} alt="logo-img" />
                </a>
            </div>

            <ul className="nav-list">
                <li className="nav-item">
                    <a href="#selection" className="nav-link">Nega biz</a>
                </li>
                <li className="nav-item">
                    <a href="#natijalar" className="nav-link">Natijalar</a>
                </li>
                <li className="nav-item">
                    <a href="#course" className="nav-link">Kurslar</a>
                </li>
                <li className="nav-item">
                    <a href="#savollar" className="nav-link">Ko’p beriladigan savollar</a>
                </li>
            </ul>

            <a href="tel:+998333060098" className="nav-call">
                <h4 className="cal-item">+998 (33) 306 0098</h4>
                <span className="cal-item">Hoziroq bog’laning</span>
            </a>


        </div>
    )
}

export default Navbar;