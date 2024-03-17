import './App.css';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { useEffect } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { app } from './options/environment/env';
import { useDispatch } from 'react-redux';
import { discountsAll } from './store/AllDiscount';
import { category } from './store/AllCategories';
import { products } from './store/AllProducts';
// static component import
import Header from './App-components/static_components/header/Header';
import Footer from './App-components/static_components/footer/Footer';
// -----------------------------------------------------

// import pages
import HomePage from './App-components/pages/home/Home';
import ProductPage from './App-components/pages/products/Products';
import Users from './App-components/users/Users';
import Admin from './App-components/admin/Admin';
import Discount from './App-components/pages/discount/Discount';
import InfoDiscount from './App-components/pages/discount-info/InfoDiscount';
import InfoProducts from './App-components/pages/product-info/InfoProduct';
function App() {
  const dbRef = ref(getDatabase(app))
  const dispatch = useDispatch();

  window.onload = () => {
    if(window.localStorage.getItem('status') !== null){
      document.querySelector('.action-users').style.display = 'none';
      document.querySelector('.us-display').style.display = 'block';
    }else{
      document.querySelector('.action-users').style.display = 'block';
      document.querySelector('.us-display').style.display = 'none';
    }
  }
  useEffect(()=>{
    get(child(dbRef, `discounts`)).then((snapshot) => {
      if (snapshot.exists()) {
        dispatch(discountsAll(snapshot.val()));
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    get(child(dbRef, `categories`)).then((snapshot) => {
      if (snapshot.exists()) {
        dispatch(category(snapshot.val()));
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    get(child(dbRef, `products`)).then((snapshot) => {
      if (snapshot.exists()) {
        dispatch(products(snapshot.val()));
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },[])
  return (
    <div className="app-container">
     <Router>
      <Header />
      <main className="main-container">
        <Routes>
          <Route exact path='' element={<HomePage />} />
          <Route path='/:productsCategories' element={<ProductPage />} />
          <Route path='console/:userName' element={<Users />} />
          <Route path='console/admin' element={<Admin />} />
          <Route path='discount' element={<Discount />} />
          <Route path='discount/:element' element={<InfoDiscount />} />
          <Route path='products/:nameProducts' element={<InfoProducts />} />
        </Routes>
      </main>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
