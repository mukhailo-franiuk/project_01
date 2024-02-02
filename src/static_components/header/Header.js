import './style/Header.css';
import LogoMicroPhone from '../../images/microphone.png';
import LogoSearch from '../../images/search.png';
import UsersLogo from '../../images/user.png';
import Checkoutlogo from '../../images/cart.png';


import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header className='header-container'>
            <div className="container-elems">
                <div className="burger-menu-01">
                    <button className='menu-toggle-01' title='Open left nav'>
                        <div className="lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </button>
                </div>
                <div className="left-menu">
                    <div className="container">
                        <div className="block-menu">
                            <div className="line-01">
                                <div className="block-line-01">
                                    <Link to="/">Logo Company</Link>
                                    <div className="close-btn">
                                        <div className="lines-close">
                                            <div className="line-01"></div>
                                            <div className="line-02"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-line-02">
                                    <img src="" alt="" />
                                    <div className="nav-actions">
                                        <div className="actions-all-users">
                                            <button></button>
                                            <button></button>
                                        </div>
                                        <div className="message-for-actions">
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logo">
                    <Link
                        to="/"
                        title='Logo Company'
                    >LogoCompany</Link>
                </div>
                <div className="catalog">
                    <button className='catalog-action-btn' title='Каталог товарів'>Каталог</button>
                </div>
                <div className="search-section">
                    <div className="line-search">
                        <div className="search-img">
                            <img src={LogoSearch} alt="" />
                        </div>
                        <input type="search" name="search" id="search" placeholder='Я шукаю ...' title='Введіть ваш запит на пошук!' />
                        <div className="voice-search" title='Голосовий пошук'>
                            <img src={LogoMicroPhone} alt="" />
                        </div>
                        <button className="action-search" title='Знайти'>знайти</button>
                    </div>
                </div>
                <div className="action-users">
                    <button title='Users'>
                        <img src={UsersLogo} alt="" />
                    </button>
                </div>
                <div className="checkout" >
                    <Link to="" title='Checkout'>
                        <img src={Checkoutlogo} alt="" />
                    </Link>
                </div>
            </div>
        </header>
    )
}