import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
// static component import
import Header from './static_components/header/Header';
// -----------------------------------------------------

// import pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import LegalTerms from './pages/legal_terms/LegalTerms';
import Careers from './pages/careers/Careers';
import Contacts from './pages/contact/Contact';
import AllCategories from './pages/all-categories/AllCategories';
import Delivery from './pages/delivery/Delivery';
import Credit from './pages/credit/Credit';
import Guarantee from './pages/guarantee/Guarantee';
import BackGoods from './pages/back-goods/BackGoods';
import ServiceCenters from './pages/service-centers/ServiceCenters';
function App() {
  return (
    <div className="app-container">
     <Router>
      <Header />
      <main className="main-container">
        <Routes>
           <Route exact path='' element={<Home />} />
           <Route path='about' element={<About />} />
           <Route path='legal_terms' element={<LegalTerms />} />
           <Route path='careers' element={<Careers />} />
           <Route path='contacts' element={<Contacts />} />
           <Route path='all-categories-goods' element={<AllCategories />} />
           <Route path='delivery' element={<Delivery/>} />
           <Route path='credit' element={<Credit/>} />
           <Route path='guarantee' element={<Guarantee/>} />
           <Route path='back-goods' element={<BackGoods/>} />
           <Route path='service-centers' element={<ServiceCenters/>} />
        </Routes>
      </main>
     </Router>
    </div>
  );
}

export default App;
