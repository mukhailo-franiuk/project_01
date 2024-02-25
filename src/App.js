import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
// static component import
import Header from './App-components/static_components/header/Header';
// -----------------------------------------------------

// import pages
import HomePage from './App-components/pages/home/Home';
import ProductPage from './App-components/pages/products/Products';
import Users from './App-components/users/Users';
import Admin from './App-components/admin/Admin';
function App() {
  return (
    <div className="app-container">
     <Router>
      <Header />
      <main className="main-container">
        <Routes>
          <Route exact path='' element={<HomePage />} />
          <Route path='product/:product' element={<ProductPage />} />
          <Route path='console/:userName' element={<Users />} />
          <Route path='console/admin' element={<Admin />} />
        </Routes>
      </main>
     </Router>
    </div>
  );
}

export default App;
