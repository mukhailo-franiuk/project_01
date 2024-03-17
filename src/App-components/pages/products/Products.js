// import './style/Product.css';
// import { useParams } from "react-router-dom";

// import { useSelector } from "react-redux";
// import { useLocation } from 'react-router-dom';
// import {
//     getAllProducts
// } from '../../../store/AllProducts';
// import Title from './Title';
// export default function ProductPage() {
//     const products = useSelector(getAllProducts);
//     document.title = `ᐅᐅДоставка ${linka.productsCategories} Львів✔до 29 хв | LA П’ЄЦ нормальна доставка їжі`;
//     function showOne(event){
//         Object.keys(products).map(item => {
//             if(event.target.getAttribute('data-patch') === products[item]['patch']){
//                 window.location.href = 'products' + '/' +  products[item]['patch'];
//             }
//         })
//     }
//     return (
//         <div className="product-page">
//             <div className="container">
//                 <Title />
//                 <div className="card-list">
//                     {Object.keys(products).map(item =>
//                         (linka.productsCategories === products[item]['category']) ?
//                             <div className="card" key={item}>
//                                 <img src={products[item]['imagePatch']} alt="" data-patch={products[item]['patch']} onClick={showOne}/>
//                                 <h2 data-patch={products[item]['patch']} onClick={showOne}>{products[item]['name']}</h2>
//                                 <p data-patch={products[item]['patch']} onClick={showOne}>{products[item]['description']}</p>
//                                 <div className="nav">
//                                     <div className="price">
//                                         <span>{products[item]['price']}</span> грн
//                                     </div>
//                                     <div className="pl-min">
//                                         <button >-</button>
//                                         <span>1</span>
//                                         <button>+</button>
//                                     </div>
//                                     <button className='btn'>Замовити</button>
//                                 </div>
//                             </div>
//                             : undefined
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }