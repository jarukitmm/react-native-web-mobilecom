import React, { Component } from "react";
import Slider from "react-slick";
import image1 from "./assets/img1.jpg";
import image2 from "./assets/img2.jpg";
import image3 from "./assets/img3.jpg";
import image4 from "./assets/img4.jpg";
import './css/carousel.css'

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div class="carouselslide">
        {/* <h2> Carousel Multiple items </h2> */}
        <Slider {...settings}>
          <div>
            <img style={{width: '100%', height: '190px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUz25ubo5KZvzAMF2-N-E0BuriMXBWy8YAsb3lN46tE3RfCbS0"></img>
          </div>
          <div>
            <img style={{width: '100%', height: '190px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNjFlYn2OH-KvmiAQfjmv6YbJABfAL5YaUlHJmxzQfgmXgMys"></img>
          </div>
          <div>
            <img style={{width: '100%', height: '190px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcklreS3HlFTqRHJwh4Rw4MNDY0LlvF1cxxtQhi-nvzVAMX-hB"></img>
          </div>
          <div>
            <img style={{width: '100%', height: '190px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZZTr82OoErSYIxya1j4wzmeiN7wXcsap2Lb30sMRJhkA6A7R8g"></img>
          </div>
          <div>
            <img style={{width: '100%', height: '190px'}} src={image1}></img>
          </div>
          <div>
            <img style={{width: '100%', height: '190px'}} src={image2}></img>
          </div>
          <div>
          <img style={{width: '100%', height: '190px'}} src={image3}></img>
            </div>
          <div>
            <img style={{width: '100%', height: '190px'}} src={image4}></img>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}