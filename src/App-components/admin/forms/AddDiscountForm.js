import { useState } from 'react';
import './style/StyleForms.css';

import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { useDispatch } from 'react-redux';

import {
    getObjDiscount
} from '../../../store/AllDiscount';

export default function AddDiscount() {
    const [progresBar, setProgresBar] = useState();
    const [imagePatch, setImagePatch] = useState();
    const dispatch = useDispatch();
    let count = 1;
    const storage = getStorage();
    function uploadFile(event) {
        const storageRef = ref(storage, 'images/' + event.target.files[0].name);
        const uploadTask = uploadBytesResumable(storageRef, event.target.files[0]);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgresBar(progress)
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImagePatch(downloadURL);
                });
            }
        );
    }
    function addDiscounts(event) {
        event.preventDefault();
        let targ = event.target.elements;
        let discount = {
            id : count,
            title : targ.primeText.value,
            description : targ.description.value,
            imagePatch : imagePatch 
        }
        dispatch(getObjDiscount(discount));
    }
    return (
        <div className="add-discount">
            <div className="top-message">
                <h2>Блок додавання Акцій</h2>
            </div>
            <form className="add-discount-form" onSubmit={addDiscounts}>
                <div className="prime-text">
                    <span>Заголовок</span>
                    <input type="text" name="primeText" id='' />
                </div>
                <div className="description">
                    <span>Опис</span>
                    <textarea name="description" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="load-image">
                    <span>Додати картинку</span>
                    <input type="file" name="files" id="" onChange={uploadFile} />
                    <div className="upload-status">
                        <div className="line-upload">
                            <div className="line" style={{ width: progresBar + '%' }}></div>
                        </div>
                    </div>
                </div>
                <button type="submit" className='btn-add-discount'>Зберегти</button>
            </form>
            <div className="list-discounts">
                <table>
                    <thead>
                        <tr>
                            <td>
                                num
                            </td>
                            <td>
                                name
                            </td>
                            <td>
                                dscrip
                            </td>
                            <td>
                                image
                            </td>
                            <td>
                                nv
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}