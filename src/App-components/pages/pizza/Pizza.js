import './style/Pizza.css';
import { useSelector } from "react-redux";
import {
    getAllProducts
} from '../../../store/AllProducts';

export default function PizzaPage() {
    document.title = 'ᐅᐅДоставка Піци Львів✔до 29 хв | LA П’ЄЦ нормальна доставка їжі';
    const products = useSelector(getAllProducts);
    function showOne(event){
        Object.keys(products).map(item => 
            (event.target.getAttribute('data-patch') === products[item]['patch']) 
            ? window.location.href = 'pizza' + '/' + products[item]['patch']
            : undefined
            )
    }
    return (
        <div className="pizza-page">
            <div className="container">
                <h1>Піца</h1>
                <div className="card-list">
                    {Object.keys(products).map(item =>
                        (products[item]['category'] === 'pizza') ?
                            <div className="card" key={item}>
                                <img src={products[item]['imagePatch']} alt="" data-patch={products[item]['patch']} onClick={showOne}/>
                                <h2 data-patch={products[item]['patch']} onClick={showOne}>{products[item]['name']}</h2>
                                <p data-patch={products[item]['patch']} onClick={showOne}>{products[item]['description']}</p>
                                <div className="nav">
                                    <div className="price">
                                        <span>{products[item]['price']}</span> грн
                                    </div>
                                    <div className="pl-min">
                                        <button >-</button>
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