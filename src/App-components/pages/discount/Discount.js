import './style/Discount.css';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getAllDiscounts } from "../../../store/AllDiscount";

export default function Discount() {
    document.title = 'Акції - LA П’ЄЦ нормальна доставка їжі у Львові';
    const allDiscounts = useSelector(getAllDiscounts);
    const locale = useLocation();
    function showOnce(event){
        Object.keys(allDiscounts).map(item => {
            if(event.target.getAttribute('data-key') === item){
                window.location.href = locale.pathname + '/' + allDiscounts[item]['patch'];
            }
        })
    }
    return (
        <div className="discount-container">
            <h1>Акції у Львові</h1>
            <div className="cart-list">
                {Object.keys(allDiscounts).map(item =>
                    <div className="card" key={item}>
                        <img src={allDiscounts[item]['imagePatch']} alt="" />
                        <button data-key={item} onClick={showOnce}>Детальніше</button>
                    </div>
                )}
            </div>
        </div>
    );
}