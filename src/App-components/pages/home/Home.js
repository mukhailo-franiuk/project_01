import './style/Home.css';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../store/AllProducts';
export default function HomePage() {
    document.title = 'ᐅᐅДоставка Піци Львів✔до 29 хв | LA П’ЄЦ нормальна доставка їжі';
    const products = useSelector(getAllProducts);
    return (
        <div className="home-page">
            <div className="container">
                <div className="slider-block">
                    <h1>Sliner</h1>
                </div>
                <div className="line-one">
                    <h2>Піца</h2>
                    <div className="line">
                        {Object.keys(products).map(item =>
                            (products[item]['category'] === 'pizza') ?
                                <div className="card" key={item}>
                                    <img src={products[item]['imagePatch']} alt="" />
                                    <h4>{products[item]['name']}</h4>
                                    <div className="nav">
                                        <div className="price"><span>{products[item]['price']}</span> грн</div>
                                        <div className="pl-min">
                                            <button>-</button>
                                            <span>1</span>
                                            <button>+</button>
                                        </div>
                                        <button className="btn">Замовити</button>
                                    </div>
                                </div>
                                : undefined
                        )}

                    </div>
                </div>
                <div className="line-two">
                    <h2>Суші</h2>
                    <div className="line">
                        {Object.keys(products).map(item =>
                            (products[item]['category'] === 'sushi') ?
                                <div className="card" key={item}>
                                    <img src={products[item]['imagePatch']} alt="" />
                                    <h4>{products[item]['name']}</h4>
                                    <div className="nav">
                                        <div className="price">{products[item]['price']}</div>
                                        <div className="pl-min">
                                            <button>-</button>
                                            <span>1</span>
                                            <button>+</button>
                                        </div>
                                        <button className="btn">Замовити</button>
                                    </div>
                                </div>
                                : undefined
                        )}
                    </div>
                </div>
                <div className="line-three">
                    <h2>Бургери</h2>
                    <div className="line">
                        {Object.keys(products).map(item =>
                            (products[item]['category'] === 'burgers') ?
                                <div className="card" key={item}>
                                    <img src={products[item]['imagePatch']} alt="" />
                                    <h4>{products[item]['name']}</h4>
                                    <div className="nav">
                                        <div className="price">{products[item]['price']}</div>
                                        <div className="pl-min">
                                            <button>-</button>
                                            <span>1</span>
                                            <button>+</button>
                                        </div>
                                        <button className="btn">Замовити</button>
                                    </div>
                                </div>
                                : undefined
                        )}
                    </div>
                </div>
                <div className="line-foor">
                    <h2>Салати</h2>
                    <div className="line">
                    {Object.keys(products).map(item =>
                            (products[item]['category'] === 'sushi') ?
                                <div className="card" key={item}>
                                    <img src={products[item]['imagePatch']} alt="" />
                                    <h4>{products[item]['name']}</h4>
                                    <div className="nav">
                                        <div className="price">{products[item]['price']}</div>
                                        <div className="pl-min">
                                            <button>-</button>
                                            <span>1</span>
                                            <button>+</button>
                                        </div>
                                        <button className="btn">Замовити</button>
                                    </div>
                                </div>
                                : undefined
                        )}
                    </div>
                </div>
                <div className="line-five">
                    <h2>Напої</h2>
                    <div className="line">
                        <div className="card">
                            <img src="" alt="" />
                            <h4></h4>
                            <p></p>
                            <div className="nav">
                                <div className="price"></div>
                                <div className="pl-min">
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <div className="btn">Замовити</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inform-block">
                    info
                </div>
                <div className="questions-block">
                    question
                </div>
            </div>
        </div>
    );
}