import './style/Admin.css';

// import forms
import AddProducts from './forms/AddProductForm';
import AddCategory from './forms/AddCategoryForm';
import AddDiscount from './forms/AddDiscountForm';
export default function Admin() {
    return (
        <div className="admin-container">
            <div className="block-actions">
                <div className="left-block">
                    <nav>
                        <h2>Navigation</h2>
                        <div className="navigation">
                        <ul>
                            <li>Add products</li>
                            <li>Add discount</li>
                            <li>Add category</li>
                            <li>History</li>
                            <li>List users reg</li>
                            <li>Exit</li>
                        </ul>
                        </div>
                    </nav>
                </div>
                <div className="right-block">
                {/* <AddProducts /> */}
                {/* <AddCategory /> */}
                <AddDiscount />
                </div>
            </div>
            <div className="modal-window">
                <div className="container-modal">
                    
                </div>
            </div>
        </div>
    );
}