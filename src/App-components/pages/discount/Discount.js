import './style/Discount.css';
import { useSelector } from "react-redux";
import { getAllDiscounts } from "../../../store/AllDiscount";
export default function Discount() {
    document.title = 'Акції - LA П’ЄЦ нормальна доставка їжі у Львові'
    const allDiscounts = useSelector(getAllDiscounts);
    return (
        <div className="discount-container">
            <h1>Акції у Львові</h1>
            <div className="cart-list">
                {Object.keys(allDiscounts).map(item =>
                    <div className="card" key={item}>
                        <img src={allDiscounts[item]['imagePatsh']} alt="" />
                        <button data-key={item}>Детальніше</button>
                    </div>
                )}
            </div>
        </div>
    );
}