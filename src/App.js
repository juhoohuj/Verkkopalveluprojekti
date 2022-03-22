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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <Carousel></Carousel>
      <ProductGrid></ProductGrid>
    </div>
  );
}

export default App;
