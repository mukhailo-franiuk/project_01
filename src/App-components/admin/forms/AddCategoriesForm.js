import {getDatabase , ref , set } from 'firebase/database';
import { app } from '../../../options/environment/env';
export default function AddCategories() {
    const db = getDatabase(app)
    function addCategories(e){
        e.preventDefault();
        let elemTarget = e.target.elements;
        set(ref(db , 'categories/' + elemTarget.patch.value),{
            title : elemTarget.title.value,
            patch : elemTarget.patch.value
        })
        window.location.reload();
    }
    return (
        <div className="add-categories">
            <div className="top-message">
                <h2>Блок додавання Акцій</h2>
            </div>
            <form className="add-categories-form" onSubmit={addCategories}>
               <div className="prime-text">
                    <span>Заголовок</span>
                    <input type="text" name="title" />
                </div>
                <div className="patch">
                    <span>Посилання</span>
                    <input type="text" name="patch" />
                </div>
                <button type="submit" className='btn-add-discount'>Зберегти</button>
            </form>
        </div>
    );
}