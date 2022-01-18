import { CCarousel, CraouselCaomponent3, CraouselCaomponent2, CCarouselItem, CraouselCaomponent1, CraouselCaomponent4,React } from '../../Imports';
import "../../css/Glavnaya/Glavnaya.css"
import video1 from  "../../imgs/video1.mp4"
import video2 from  "../../imgs/video2.mp4"
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    return (
      <div >
        <div className=""  >
          <CCarousel controls indicators className="" >

            <CCarouselItem className="olmali" ref={this.inputRef}>
             
              <video className="Glavnaya_img" src={video1} autoPlay loop muted  />
            </CCarouselItem>
            <CCarouselItem className="olmali" ref={this.inputRef}>
              <video className="Glavnaya_img" src={video2} autoPlay loop muted  />
            </CCarouselItem>

          </CCarousel>
        </div>
      </div>
    )
  }
}