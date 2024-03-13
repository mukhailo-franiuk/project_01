import './style/StyleForms.css';
import { getDatabase , ref , set } from 'firebase/database';
import { app } from '../../../options/environment/env';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    getCategories
} from '../../../store/AllCategories';
import {getLinkImage} from '../../../store/AllDiscount';

import UploadFiles from './actions/uploadFiles';
export default function AddProducts() {
    const [category , setCategory] = useState();
    const allCategories = useSelector(getCategories);
    const linkImg = useSelector(getLinkImage);
    const db = getDatabase(app);
    function getCategory(event){
        setCategory(event.target.value);
    }
    function AddProduct(event) {
        event.preventDefault();
        let elemTarget = event.target.elements;
        set(ref(db, 'products/' + elemTarget.patch.value), {
            name: elemTarget.name.value,
            patch : elemTarget.patch.value,
            category : category,
            price : elemTarget.price.value,
            weight : elemTarget.weight.value,
            protein : elemTarget.protein.value,
            carbo : elemTarget.carbo.value,
            fat : elemTarget.fat.value,
            calories : elemTarget.calories.value,
            description : elemTarget.description.value,
            imagePatch : linkImg
        });
        window.location.reload();
    }
    return (
        <div className="add-products-form">
            <div className="top-message">
                <h2>Блок додавання продуктії</h2>
            </div>
            <form className="add-product" onSubmit={AddProduct}>
                <div className="check-category">
                    <span>Вибір категорії</span>
                        <select onInput={getCategory}>
                        {Object.keys(allCategories).map(item =>
                            <option key={item} value={allCategories[item]['patch']}>{allCategories[item]['title']}</option>
                        )}
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
                    <input type="text" name="price" />
                </div>
                <div className="weight">
                    <span>Вага</span>
                    <input type="text" name="weight" />
                </div>
                <div className="info">
                    <div>
                        <span>Білки</span>
                        <input type="text" name="protein" />
                    </div>
                    <div>
                        <span>Вуглеводи</span>
                        <input type="text" name="carbo" />
                    </div>
                    <div>
                        <span>Жири</span>
                        <input type="text" name="fat" />
                    </div>
                    <div>
                        <span>Калорійність</span>
                        <input type="text" name="calories" />
                    </div>
                </div>
                <div className="description">
                    <span>Опис</span>
                    <textarea name="description" cols="30" rows="10"></textarea>
                </div>
                <div className="load-image">
                    <UploadFiles />
                </div>
                <button type="submit" className='btn-add'>Зберегти</button>
            </form>
        </div>
    );
}