import './style/Admin.css';

// import forms
import AddProducts from './forms/AddProductForm';
import AddDiscount from './forms/AddDiscountForm';
import AddCategories from './forms/AddCategoriesForm';
import {
    closeConsole,
    addProducts,
    addDiscounts,
    addCategory
} from './actions/Action';
import { useEffect } from 'react';
export default function Admin() {
    document.title = `Панель адміністратора`;
    useEffect(() => {
        document.querySelector('.add-products-form').classList.remove('close-products-form');
        document.querySelector('.add-discount').classList.add('close-discount');
        document.querySelector('.add-categories').classList.add('close-categories');
    })
    return (
        <div className="admin-container">
            <div className="block-actions">
                <div className="left-block">
                    <nav>
                        <h2>Navigation</h2>
                        <div className="navigation">
                            <ul>
                                <li onClick={addProducts}>Add products</li>
                                <li onClick={addDiscounts}>Add discount</li>
                                <li onClick={addCategory}>Add category</li>
                                <li>History</li>
                                <li>List users reg</li>
                                <li onClick={closeConsole}>Exit</li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="right-block">
                    <AddProducts />
                    <AddDiscount />
                    <AddCategories />
                </div>
            </div>
            <div className="modal-window">
                <div className="container-modal">

                </div>
            </div>
        </div>
    );
}