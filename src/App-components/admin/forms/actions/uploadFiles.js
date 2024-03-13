import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { links } from '../../../../store/AllDiscount';
export default function UploadFiles() {
    const dispatch = useDispatch();
    const [progressNumber, setProgresNumber] = useState();
    const storage = getStorage();
    function uploadFile(event) {
        const storageRef = ref(storage, 'images/' + event.target.files[0].name);
        const uploadTask = uploadBytesResumable(storageRef, event.target.files[0]);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgresNumber(progress)
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
                    dispatch(links(downloadURL));
                });
            }
        );
    }
    return (
        <div className="load-image">
            <span>Додати картинку</span>
            <input type="file" name="files" onChange={uploadFile} />
            <div className="upload-status">
                <div className="line-upload">
                    <div className="line" style={{ width: progressNumber + '%' }}></div>
                </div>
            </div>
        </div>
    );
}
