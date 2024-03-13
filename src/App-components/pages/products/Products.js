import './style/Product.css';
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import {
    getAllProducts
} from '../../../store/AllProducts';
import Title from './Title';
export default function ProductPage() {
    const products = useSelector(getAllProducts);
    let linka = useParams();
    document.title = `ᐅᐅДоставка ${linka.productsCategories} Львів✔до 29 хв | LA П’ЄЦ нормальна доставка їжі`
    return (
        <div className="product-page">
            <div className="container">
                <Title />
                <div className="card-list">
                    {Object.keys(products).map(item =>
                        (linka.productsCategories === products[item]['category']) ?
                            <div className="card" key={item}>
                                <img src={products[item]['imagePatch']} alt="" />
                                <h2>{products[item]['name']}</h2>
                                <p>{products[item]['description']}</p>
                                <div className="nav">
                                    <div className="price">
                                        <span>{products[item]['price']}</span> грн
                                    </div>
                                    <div className="pl-min">
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>
                                    <button className='btn'>Замовити</button>
                                </div>
                            </div>
                            : undefined
                    )}
                </div>
            </div>
        </div>
    );
}