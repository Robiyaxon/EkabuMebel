import React from 'react';
import style from "../../../css/Kuhne.module.css"
import img from "../../../imgs/Детская мебель/1.jfif"
import img2 from "../../../imgs/Детская мебель/1.jpg"
import img3 from "../../../imgs/Детская мебель/3.jpg"
import img4 from "../../../imgs/Детская мебель/4.jfif"
import img5 from "../../../imgs/Детская мебель/5.jfif"
import img6 from "../../../imgs/Детская мебель/6.jpg"
import img7 from "../../../imgs/Детская мебель/7.png"
import img8 from "../../../imgs/Детская мебель/8.jfif"
import img9 from "../../../imgs/Детская мебель/9.jfif"
import MenuValidators from '../../../Reduser/Validators/MenuValidators';
const ДетскаяМебел = () => {
      const map = [
            { url: "/iki", img: img},
            { url: "/ikiki", img: img2},
            { url: "/glavnkikikikaya", img: img3},
            { url: "/glavnkikikikaya", img: img5 },
            { url: "/glavnkikikikaya", img: img4},
            { url: "/glavnkikikikaya", img: img6},
            { url: "/glavnkikikikaya", img: img7},
            { url: "/glavnkikikikaya", img: img8},
            { url: "/glavnkikikikaya", img: img9},
      ]
      const map2 = map.map(a => MenuValidators(a.url, a.img,"Детская мебель"))
      return (
            <div className={style.NavLink2}>
                  {map2}
            </div>
      );
};
export default ДетскаяМебел;