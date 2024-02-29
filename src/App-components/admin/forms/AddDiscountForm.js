import './style/StyleForms.css';
export default function AddDiscount(){
    return (
        <div className="add-discount">
            <div className="top-message">
                <h2>Блок додавання Акцій</h2>
            </div>
            <form className="add-discount-form"> 
                <div className="prime-text">
                    <span>Заголовок</span>
                    <input type="text" name="primeText" />
                </div>
                <div className="patch-discount">
                    <span>Посилання</span>
                    <input type="text" name="patch" />
                </div>
                <div className="description">
                    <span>Опис</span>
                    <textarea name="description" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="load-image">
                    <span>Додати картинку</span>
                    <input type="file" name="image" id="" />
                </div>
                <button type="submit" className='btn-add-discount'>Зберегти</button>
            </form>
        </div>
    );
}