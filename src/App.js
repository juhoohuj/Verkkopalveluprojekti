import './styles/App.css';
import './styles/Header.css';
import './styles/NavBar.css';
import './styles/ProductCard.css';
import './styles/ProductGrid.css';
import './styles/Carousel.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Carousel from './components/Carousel';


const URL = 'http://localhost/store/';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar url={URL}/>
      <Carousel/>
      <ProductGrid url={URL}/>
    </div>
  );
}

export default App;
