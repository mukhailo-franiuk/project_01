import './style/Header.css';
import LogoMicroPhone from '../../images/microphone.png';
import LogoSearch from '../../images/search.png';
import UsersLogo from '../../images/user.png';
import CheckoutLogo from '../../images/cart.png';
import CheckoutLogoBlack from '../../images/cart-black.png';
import CatalogWhite from '../../images/catalog-white.png';
import CatalogBlack from '../../images/catalog-black.png';
import QuestionLogo from '../../images/question.png';
import TelegramGreenLogo from '../../images/telegram-green.png';
import { Link } from 'react-router-dom';

import {
    openLeftMenu,
    closeLeftMenu,
    closeAll
} from './options/Actions';
export default function Header() {
    return (
        <header className='header-container'>
            <div className="container-elems">
                <div className="burger-menu-01">
                    <button className='menu-toggle-01' title='Open left nav' onClick={openLeftMenu}>
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
                                    <div className="logo">
                                    <Link to="/" onClick={closeAll}>Logo Company</Link>
                                    </div>
                                    <div className="close-btn">
                                        <div className="lines-close" onClick={closeLeftMenu}>
                                            <div className="line-01"></div>
                                            <div className="line-02"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-line-02">
                                    <div className="img-user" title='image user'>
                                    <img src={UsersLogo} alt="user logo" />
                                    </div>
                                    <div className="nav-actions">
                                        <div className="actions-all-users">
                                            <button title='Вхід'>Вхід</button>
                                            <div className="border-line"></div>
                                            <button title='Реєстрація'>Реєстрація</button>
                                        </div>
                                        <div className="message-for-actions">
                                            <p>Авторизуйтесь для отримання розширених можливостей</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="line-02">
                                <ul>
                                    <li>
                                        <button className="block">
                                            <img src={CatalogBlack} alt="" />
                                            <span>Каталог товарів</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="block">
                                            <img src={QuestionLogo} alt="" />
                                            <span>Справочний центр</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="block">
                                            <img src={TelegramGreenLogo} alt="" />
                                            <span className='green-style'>Чат з Name Company</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="block">
                                            <img src={CheckoutLogoBlack} alt="" />
                                            <span>Кошик</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="line-03">
                                <h3>Інформація про компанію</h3>
                                <ul>
                                    <li>
                                        <Link to="/about" onClick={closeAll}>Про нас</Link>
                                    </li>
                                    <li>
                                        <Link to="/legal_terms" onClick={closeAll}>Умови користування сайтом</Link>
                                    </li>
                                    <li>
                                        <Link to="/careers" onClick={closeAll}>Ваканції</Link>
                                    </li>
                                    <li>
                                        <Link to="/contacts" onClick={closeAll}>Контакти</Link>
                                    </li>
                                    <li>
                                        <Link to="/all-categories-goods" onClick={closeAll}>Всі категорії</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="line-04">
                            <h3>Допомога</h3>
                                <ul>
                                    <li>
                                        <Link to="/delivery" onClick={closeAll}>Доставка і оплата</Link>
                                    </li>
                                    <li>
                                        <Link to="/credit" onClick={closeAll}>Кредити</Link>
                                    </li>
                                    <li>
                                        <Link to="/guarantee" onClick={closeAll}>Гарантія</Link>
                                    </li>
                                    <li>
                                        <Link to="/back-goods" onClick={closeAll}>Повернення товару</Link>
                                    </li>
                                    <li>
                                        <Link to="/service-centers" onClick={closeAll}>Сервісні центри</Link>
                                    </li>
                                </ul>
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
                    <button className='catalog-action-btn' title='Каталог товарів'> <img src={CatalogWhite} alt="" />Каталог</button>
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
                        <img src={CheckoutLogo} alt="" />
                    </Link>
                </div>
            </div>
        </header>
    )
}