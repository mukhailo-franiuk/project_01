import './style/Footer.css';
import Logo from '../../../images/logo-01.svg';

export default function Footer() {
    return (
        <div className="footer-component">
            <div className='container'>
                <div className="block-one">
                    <div className="logo">
                        <a href=''>
                            <img src={Logo} alt="" />
                        </a>
                    </div>
                    <div className="social">
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                    </div>
                    <div className="pay-icons">
                        <div className="block">
                            <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/visa.svg" alt="" />
                        </div>
                        <div className="block">
                            <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/mastercard.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="block-two">
                    <ul>
                        <li className='title'>
                            <h2>м.Львів</h2>
                        </li>
                        <li>Куровця, 36</li>
                        <li>Героїв УПА, 73</li>
                        <li>Січових Стрільців, 10</li>
                        <li>Торф'яна, 10</li>
                        <li>Хуторівка, 59б</li>
                        <li>Шевченка, 60</li>
                    </ul>
                </div>
                <div className="block-three">
                    <div className="phone-number">
                        <b>Tel. - </b> <span> 097 440 40 60</span>
                    </div>
                    <div className="app-download">
                        <h3>Завантажуй мобільний додаток</h3>
                        <div className="links-download">
                            <a href="https://itunes.apple.com/ng/app/l%D0%B0-%D0%BF%D1%94%D1%86/id1448586060?mt=8" target='_blanck'>
                                <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/app-store.webp" alt="" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.lapiec.android" target='_blanck'>
                                <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/google-play.webp" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}