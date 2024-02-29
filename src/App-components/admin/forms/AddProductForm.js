import './style/StyleForms.css';
export default function AddProducts() {
    return (
        <div className="add-products-form">
            <div className="top-message">
                <h2>Блок додавання продуктії</h2>
            </div>
            <form className="add-product">
                <div className="check-category">
                    <span>Вибір категорії</span>
                    <select>
                        <option value="..." >...</option>
                    </select>
                </div>
                <div className="name-product">
                    <span>Назва продукції</span>
                    <input type="text" name="name" />
                </div>
                <div className="patch-product">
                    <span>Посилання</span>
                    <input type="text" name="patch" />
                </div>
                <div className="price">
                    <span>Ціна</span>
                    <input type="number" name="price" id="" />
                </div>
                <div className="weight">
                    <span>Вага</span>
                    <input type="number" name="weight" id="" />
                </div>
                <div className="info">
                    <div>
                        <span>Білки</span>
                        <input type="number" name="protein" id="" />
                    </div>
                    <div>
                        <span>Вуглеводи</span>
                        <input type="number" name="carbo" id="" />
                    </div>
                    <div>
                        <span>Жири</span>
                        <input type="number" name="fat" id="" />
                    </div>
                    <div>
                        <span>Калорійність</span>
                        <input type="number" name="calories" id="" />
                    </div>
                </div>
                <div className="description">
                    <span>Опис</span>
                    <textarea name="description" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="load-image">
                    <span>Додати картинку</span>
                    <input type="file" name="image" id="" />
                </div>
                <button type="submit" className='btn-add'>Зберегти</button>
            </form>
        </div>
    );
}