import { Link } from 'react-router-dom';
import './style/Header.css';
// imports images for header
import Logo from '../../../images/logo-01.svg';
import Discount from '../../../images/shared-logo.svg';
import Pizza from '../../../images/menu-icon-2.svg';
import Sushi from '../../../images/sushi.svg';
import Burgers from '../../../images/burgery.svg';
import Shawarma from '../../../images/shaurma.svg';
import HotDog from '../../../images/hot-dogy.svg';
import Salad from '../../../images/menu-icon-3.svg';
import Frezing from '../../../images/freezing.svg';
import Desert from '../../../images/deserty-nova.svg';
import Drink from '../../../images/menu-icon-4.svg';
import AlcoholDrink from '../../../images/alkogolni-napoyi-1.svg';
import Info from '../../../images/menu-icon-5.svg';
import Checkout from '../../../images/shopping-cart.svg';
// import actions
import {
    ActineButtonModal,
    OpenSushi,
    closeButtonModal,
    openAlcohol,
    openInfo,
    showActionsForm,
    closeActionsForm,
    showEnterUser,
    showRegUser,
    formEnterControls,
    formRegControls
} from './options/Actions';
import { useSelector , useDispatch} from 'react-redux';
import { getUsers,increment } from '../../../reducers/CheckUser';
import { useEffect, useState } from 'react';
export default function Header() {
    const users = useSelector(getUsers);
    const dispach = useDispatch();
    const [allUser,setAllUser] = useState();
    useEffect(()=>{
        
    },[]);
    function getUs() {
        dispach(increment(allUser));
    }
    return (
        <header className='header-container'>
            <div className="list-elements">
                <div className="logo">
                    <Link to="/" onClick={closeButtonModal}>
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="all-links">
                    <div className="links-list">
                        <ul>
                            <li>
                                <Link to="/discount" title='Акції' onClick={closeButtonModal}>
                                    <img src={Discount} alt="" />
                                    <span>Акції</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" title='Піца' onClick={closeButtonModal}>
                                    <img src={Pizza} alt="" />
                                    <span>Піца</span>
                                </Link>
                            </li>
                            <li className='sushi'>
                                <div className='shushi-block-nav'>
                                    <div className="btn-block" onClick={OpenSushi}>
                                        <img src={Sushi} alt="" />
                                        <span>Суші</span>
                                        <i className="arrow down"></i>
                                    </div>
                                    <div className="list-links-sushi">
                                        <ul>
                                            <li className='first-li'>
                                                <Link to="/product/sets" onClick={closeButtonModal}>Сети</Link>
                                            </li>
                                            <li>
                                                <Link to="/" onClick={closeButtonModal}>Філодельфія</Link>
                                            </li>
                                            <li>
                                                <Link to="/" onClick={closeButtonModal}>Гарячі роли</Link>
                                            </li>
                                            <li>
                                                <Link to="/" onClick={closeButtonModal}>Роли</Link>
                                            </li>
                                            <li className='last-li'>
                                                <Link to="/" onClick={closeButtonModal}>Маки</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to="/product/burgers" title='Бургери' onClick={closeButtonModal}>
                                    <img src={Burgers} alt="" />
                                    <span>Бургери</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/product/shawarma" title='кебаб' onClick={closeButtonModal}>
                                    <img src={Shawarma} alt="" />
                                    <span>Кебаб</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/product/hot-dogs" title='хот дог' onClick={closeButtonModal}>
                                    <img src={HotDog} alt="" />
                                    <span>Хот Дог</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/product/salad" title='салати' onClick={closeButtonModal}>
                                    <img src={Salad} alt="" />
                                    <span>Салати</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/product/freezing" title='заморозка' onClick={closeButtonModal}>
                                    <img src={Frezing} alt="" />
                                    <span>Заморозка</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/product/desert" title='десерти' onClick={closeButtonModal}>
                                    <img src={Desert} alt="" />
                                    <span>Десерти</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/product/drink" title='напої' onClick={closeButtonModal}>
                                    <img src={Drink} alt="" />
                                    <span>Напої</span>
                                </Link>
                            </li>
                            <li className='alcohol'>
                                <div className='alcohol-block-nav'>
                                    <div className="btn-block-alcohol" onClick={openAlcohol}>
                                        <img src={AlcoholDrink} alt="" />
                                        <span>Алногольні <br /> напої</span>
                                        <i className="arrow-a down-a"></i>
                                    </div>
                                    <div className="list-links-alcohol">
                                        <ul>
                                            <li className='first-li'>
                                                <Link to="/product/sets" onClick={closeButtonModal}>Сети</Link>
                                            </li>
                                            <li>
                                                <Link to="/" onClick={closeButtonModal}>Філодельфія</Link>
                                            </li>
                                            <li>
                                                <Link to="/" onClick={closeButtonModal}>Гарячі роли</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='info'>
                                <div className='info-block-nav'>
                                    <div className="btn-block-info" onClick={openInfo}>
                                        <img src={Info} alt="" />
                                        <span>Інформація</span>
                                        <i className="arrow-i down-i"></i>
                                    </div>
                                    <div className="list-links-info">
                                        <ul>
                                            <li className='first-li'>
                                                <Link to="/product/sets" onClick={closeButtonModal}>Вакансії</Link>
                                            </li>
                                            <li>
                                                <Link to="/" onClick={closeButtonModal}>Франшиза</Link>
                                            </li>
                                            <li>
                                                <Link to="/" onClick={closeButtonModal}>Доставка</Link>
                                            </li>
                                            <li>
                                                <Link to="/" onClick={closeButtonModal}>Оплата</Link>
                                            </li>
                                            <li>
                                                <Link to="/" onClick={closeButtonModal}>Про нас</Link>
                                            </li>
                                            <li>
                                                <Link to="/" onClick={closeButtonModal}>Новини</Link>
                                            </li>
                                            <li>
                                                <Link to="/" onClick={closeButtonModal}>Оферта</Link>
                                            </li>
                                            <li>
                                                <Link to="/" onClick={closeButtonModal}>Для партнерів</Link>
                                            </li>
                                            <li>
                                                <Link to="/" onClick={closeButtonModal}>Контакти</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="checkout">
                    <div className="checkout-block">
                        <img src={Checkout} alt="" />
                        <span>0 грн</span>
                    </div>
                </div>
                <div className="action-users">
                    <button className='action-us-ad' onClick={showActionsForm}>Увійти</button>
                </div>
                <div className="btn-burger">
                    <button className='btn-01' onClick={ActineButtonModal}>
                        <div className="line-01"></div>
                        <div className="line-02"></div>
                        <div className="line-03"></div>
                    </button>
                </div>
            </div>
            <div className="enter-users" onClick={getUs}>
                <div className="canvas-users">
                    <form className='enter-user' onSubmit={formEnterControls}>
                        <h2>Вхід в кабінет</h2>
                        <div className="login">
                            <span>Логін</span>
                            <input type="text" name='login-users' />
                        </div>
                        <div className="password">
                            <span>Пароль</span>
                            <input type="password" name='password-users' />
                        </div>
                        <div className="save-inform">
                            <input type="checkbox" title='Зберегти вас?' />
                            <span>Запам'ятати вас?</span>
                        </div>
                        <button type='submit'>Вхід</button>
                        <div className="link-reg">
                            <span>Якщо ви не маєте акаунту в нас ми хотіли би запропонувати пройти простеньку реєстрацію і стати частиною нашої сім'ї! <button onClick={showRegUser}>Реєстрація</button></span>
                        </div>
                        <div className="close-form" onClick={closeActionsForm}>
                            <div className="line-01"></div>
                            <div className="line-02"></div>
                        </div>
                    </form>
                    <form className="reg-users close-reg-user" onClick={formRegControls}>
                        <h2>Реєстрація</h2>
                        <div className="login">
                            <span>Логін</span>
                            <input type="text" />
                        </div>
                        <div className="password">
                            <span>Пароль</span>
                            <input type="password" />
                        </div>
                        <div className="repeat-password">
                            <span>Повторити пароль</span>
                            <input type="password" />
                        </div>
                        <div className="save-inform">
                            <input type="checkbox" title='Зберегти вас?' />
                            <span>Зберегти ваші данні?</span>
                        </div>
                        <button type='submit'>Реєстрація</button>
                        <div className="link-reg">
                            <span>Якщо ви вже зареєстровані к нас тоді ввійдіть під своїми логіном і паролем <button onClick={showEnterUser}>Вхід</button></span>
                        </div>
                        <div className="close-form" onClick={closeActionsForm}>
                            <div className="line-01"></div>
                            <div className="line-02"></div>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    )
}