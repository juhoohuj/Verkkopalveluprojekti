import React from 'react'
import kuva from "../images/carousel-image.jpg";
import kuva3 from "../images/carousel-image2.jpg";
import kuva4 from "../images/carousel-image3.jpg";


function Carousel() {
  return (
      <>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src={kuva} className="d-block" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Läppärit pelikäyttöön</h5>
        <p>Opiskelevalle pelaajalle sopivat koneet.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={kuva4} className="d-block" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Pelitietokoneet</h5>
        <p>Raskaaseen pelaamiseen.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={kuva3} className="d-block" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Läppärit opiskeluun</h5>
        <p>Laaja valikoima läppäreitä opiskeluun.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
  )
}

export default Carousel