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
export default function Header() {
    return (
        <header className='header-container'>
            <div className="navigation-container">
                <div className="logo">
                    <Link to="/" title='la.ua'>
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="all-links">
                    <ul className='list-links'>
                        <li>
                            <Link to="/discount" title='discount'>
                                <img src={Discount} alt="" />
                                <span>Акції</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" title='home page'>
                                <img src={Pizza} alt="" />
                                <span>Піца</span>
                            </Link>
                        </li>
                        <li className='sushi-section'>
                            <section>
                                <img src={Sushi} alt="" />
                                <span>Суші</span>
                            </section>
                            <ul className="hov-sushi">
                                <li>
                                    <Link to="/">Сети</Link>
                                </li>
                                <li>
                                    <Link to="/">Філодельфія</Link>
                                </li>
                                <li>
                                    <Link to="/">Гаряці роли</Link>
                                </li>
                                <li>
                                    <Link to="/">Роли</Link>
                                </li>
                                <li>
                                    <Link to="/">Маки</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/burgers" title='home page'>
                                <img src={Burgers} alt="" />
                                <span>Бургери</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/shawarma" title='home page'>
                                <img src={Shawarma} alt="" />
                                <span>Кебаб</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/hot-dogs" title='home page'>
                                <img src={HotDog} alt="" />
                                <span>Хот-доги</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/salad" title='home page'>
                                <img src={Salad} alt="" />
                                <span>Салати</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/frizers" title='home page'>
                                <img src={Frezing} alt="" />
                                <span>Заморозка</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/deserts" title='home page'>
                                <img src={Desert} alt="" />
                                <span>Десерти</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/drinks" title='home page'>
                                <img src={Drink} alt="" />
                                <span>Напої</span>
                            </Link>
                        </li>
                        <li className='alcohol-drink'>
                            <Link to="/alcohol-drinks" title='home page'>
                                <img src={AlcoholDrink} alt="" />
                                <span>Алкогольні<br /> напої</span>
                            </Link>
                            <ul className="hov-alcohol">
                                <li>
                                    <Link to="/">Вино</Link>
                                </li>
                                <li>
                                    <Link to="/">Пиво</Link>
                                </li>
                                <li>
                                    <Link to="/">Сидр</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='info-section'>
                            <section>
                                <img src={Info} alt="" />
                                <span>
                                    Інформація
                                </span>
                            </section>
                            <ul className="hov-info">
                                <li>
                                    <Link to="/">Вакансії</Link>
                                </li>
                                <li>
                                    <Link to="/">Франшиза</Link>
                                </li>
                                <li>
                                    <Link to="/">Доставка</Link>
                                </li>
                                <li>
                                    <Link to="/">Оплата</Link>
                                </li>
                                <li>
                                    <Link to="/">Про нас</Link>
                                </li>
                                <li>
                                    <Link to="/">Новини</Link>
                                </li>
                                <li>
                                    <Link to="/">Оферта</Link>
                                </li>
                                <li>
                                    <Link to="/">Для партнерів</Link>
                                </li>
                                <li>
                                    <Link to="/">Контакти</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="checkout-contain">
                    <div className="checkout-block">
                        <img src={Checkout} alt="" />
                        <span>0 грн</span>
                    </div>
                </div>
                <div className="actions-users">
                    <p>Увійти</p>
                </div>
            </div>
        </header>
    )
}