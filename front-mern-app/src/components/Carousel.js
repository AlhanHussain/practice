import React from 'react'

export default function Carousel() {
  return (    
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div classNameName='carousel-caption' style={{zIndex:'10'}}>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button classNameName="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>

    </div>
    <div className="carousel-item active">
      {/* got this link from  (https://awik.io/generate-random-images-unsplash-without-using-api/)*/}
      <img src="https://source.unsplash.com/random/300x300/?biryani" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300x300/?burger" className="d-block w-100"   style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300x300/?pizza" className="d-block w-100"  style={{filter:"brightness(30%)"}}  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
//     <div>
//       <div>

//       <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
//   <div class="carousel-inner" id='carousel'>
//   <div classNameName='carousel-caption' style={{zIndex:'10'}}>

//   <form className="d-flex" role="search">
//        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//        <button classNameName="btn btn-outline-success text-white bg-success" type="submit">Search</button>
// </form>
// </div>
//     <div class="carousel-item active">
//       <img src="https://source.unsplash.com/random/300x300/?biryani" class="d-block w-100" style={{filter:"brightness(30%)"}}  alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="https://source.unsplash.com/random/300x300/?cake" class="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="https://source.unsplash.com/random/300x300/?chocolate" class="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//       </div>
//     </div>
  )
}
