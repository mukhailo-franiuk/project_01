import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../../../options/environment/env';
import './style/StyleForms.css';
import { useSelector } from 'react-redux';
import UploadFiles from './actions/uploadFiles';
import { getLinkImage, getAllDiscounts } from '../../../store/AllDiscount';
export default function AddDiscount() {
    const imageLink = useSelector(getLinkImage);
    const allDiscounts = useSelector(getAllDiscounts);
    const db = getDatabase(app);
    function addDiscounts(event) {
        event.preventDefault();
        let targ = event.target.elements;
        set(ref(db, 'discounts/' + Math.floor(Math.random() * 10000)), {
            title: targ.primeText.value,
            description: targ.description.value,
            imagePatsh: imageLink
        });
       window.location.reload();
    }
    return (
        <div className="add-discount">
            <div className="top-message">
                <h2>Блок додавання Акцій</h2>
            </div>
            <form className="add-discount-form" onSubmit={addDiscounts}>
                <div className="prime-text">
                    <span>Заголовок</span>
                    <input type="text" name="primeText" />
                </div>
                <div className="description">
                    <span>Опис</span>
                    <textarea name="description" cols="30" rows="10"></textarea>
                </div>
                <UploadFiles />
                <button type="submit" className='btn-add-discount'>Зберегти</button>
            </form>
            <div className="list-discounts">
                <table className="table">
                    <thead>
                        <tr>
                            <th >#</th>
                            <th>title</th>
                            <th>description</th>
                            <th>image</th>
                            <th>navi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(allDiscounts).map((item, index) =>
                            <tr key={item}>
                                <th>{index+1}</th>
                                <td>{allDiscounts[item]['title'].slice(0 , 10)}</td>
                                <td>{allDiscounts[item]['description'].slice(0 , 20)}</td>
                                <td><img src={allDiscounts[item]['imagePatsh']} alt="" /></td>
                                <td>
                                    <button>edit</button>
                                    <button>delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}