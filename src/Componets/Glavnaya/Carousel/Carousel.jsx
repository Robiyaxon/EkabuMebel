import { CCarousel, CCarouselItem } from '@coreui/react';
import slider from "../../../imgs/engkatta.png"
import slider2 from "../../../imgs/Kttaekran.png"
import slider3 from "../../../imgs/kichik3.jpg"
import slider4 from "../../../imgs/katta3.jpg"
import "../../../css/Glavnaya.css"
import React, { Component } from 'react'
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    return (
      <div >
        <div className=""  >
          <CCarousel controls indicators className="" >
            
              <CCarouselItem className="olmali"  ref={this.inputRef}>
              <picture>
          <source media="(min-width: 501px)" srcset={slider}/>
          <source media="(max-width: 500px)" srcset={slider2}/>
  <img src={slider} alt="Flowers" className="Glavnaya_img"/>
</picture>
            </CCarouselItem>
              <CCarouselItem className="olmali"  ref={this.inputRef}>
              <picture>
          <source media="(min-width: 501px)" srcset={slider3}/>
          <source media="(max-width: 500px)" srcset={slider4}/>
  <img src={slider4} alt="Flowers" className="Glavnaya_img"/>
</picture>
            </CCarouselItem>
           
          </CCarousel>
        </div>
      </div>
    )
  }
}