import React from 'react';
import { watsap, HeaderImg1, HeaderImg2 } from '../../Imports';
import "../../css/Header/Header.css"
const Header = () => {
  return (
    <div className="Header">
      <div className="Header_img">
        <img src={HeaderImg1} alt="" className="Header_imgs" />
      </div>
      <div className="1">
        <p className="Header_text1">С 2012 года производим мебель по индивидуальным размерам</p>
      </div>
      <div className="2">
        <p className="Heade_text2"><strong style={{ color: ' #888888' }}>Шоу-рум:</strong> г.Екатеринбург ул.Белинского, 169Б</p>
      </div>
      <div className="3">
        <p className="Heade_text3"><strong style={{ color: ' #888888' }}>График работы:</strong> ПН-ПТ с 10 до 19 СБ-ВС с 10 до 18</p>
      </div>
      <div className="Header_Tels">
        <img src={watsap} alt="" className="Header_imgs2" />
        <img src={HeaderImg2} alt="" className="Header_imgs3" />
        <div className="Header_tel">
          <a href="tel:8 (343) 2 868 395" className="Header_tel1">8(343) 2 868 395 </a>
          <a href="tel:8 (902) 8 777 952" className="Header_tel2"> 8(902) 8 777 952</a>
        </div>

      </div>


    </div>
  );
};
export default Header;