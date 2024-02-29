import './style/StyleForms.css';

export default function AddCategory(){
    return (
        <div className="add-category">
             <div className="top-message">
                <h2>Блок додавання категорій</h2>
            </div>
            <form className="add-category-form">
                <div className="name-category">
                    <span>Назва категорії</span>
                    <input type="text" name="nameCategory" />
                </div>
                <div className="patch-category">
                    <span>Посилання</span>
                    <input type="text" name="patchCategory" id="" />
                </div>
                <button type="submit" className='btn-add-category'>Зберегти</button>
            </form>
        </div>
    );
}