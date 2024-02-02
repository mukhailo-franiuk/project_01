import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
// static component import
import Header from './static_components/header/Header';
// -----------------------------------------------------

// import pages
import Home from './pages/home/Home';
function App() {
  return (
    <div className="app-container">
     <Router>
      <Header />
      <main className="main-container">
        <Routes>
           <Route exact path='' element={<Home />} />
        </Routes>
      </main>
     </Router>
    </div>
  );
}

export default App;
