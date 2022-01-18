import React from 'react';
import style from "../../../css/Glavnaya/Kuhne.module.css"
import img from "../../../imgs/vanna/1.png"
import img2 from "../../../imgs/vanna/2.png"
import img3 from "../../../imgs/vanna/5.jpg"
import img4 from "../../../imgs/vanna/6.jpg"
import img5 from "../../../imgs/vanna/7.jpg"
import img6 from "../../../imgs/vanna/8.jpg"
import img7 from "../../../imgs/vanna/9.jpg"
import img8 from "../../../imgs/vanna/4.jfif"
import img9 from "../../../imgs/vanna/3.jfif"
import MenuValidators from '../../../Reduser/Validators/MenuValidators';
const Ванной = () => {
      const map = [
            { url: "/iki", img: img},
            { url: "/ikiki", img: img2 },
            { url: "/glavnkikikikaya", img: img3 },
            { url: "/glavnkikikikaya", img: img5},
            { url: "/glavnkikikikaya", img: img4},
            { url: "/glavnkikikikaya", img: img6},
            { url: "/glavnkikikikaya", img: img7},
            { url: "/glavnkikikikaya", img: img8},
            { url: "/glavnkikikikaya", img: img9},
      ]
      const map2 = map.map(a => MenuValidators(a.url, a.img,"Мебель для ванной", a.img))
      return (
            <div className={style.NavLink2}>
                  {map2}
            </div>
      );
};
export default Ванной;