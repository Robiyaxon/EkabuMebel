import React from 'react';
import style from "../../../css/Glavnaya/Kuhne.module.css"
import img from "../../../imgs/Прихожие/1.jfif"
import img2 from "../../../imgs/Прихожие/2.jfif"
import img3 from "../../../imgs/Прихожие/3.jfif"
import img4 from "../../../imgs/Прихожие/4.jfif"
import img5 from "../../../imgs/Прихожие/4.jpg"
import img6 from "../../../imgs/Прихожие/6.jpg"
import img7 from "../../../imgs/Прихожие/7.jfif"
import img8 from "../../../imgs/Прихожие/8.jfif"
import img9 from "../../../imgs/Прихожие/9.jfif"
import MenuValidators from '../../../Reduser/Validators/MenuValidators';
const Прихожие = () => {
      const map = [
            { url: "/iki", img: img },
            { url: "/ikiki", img: img2 },
            { url: "/glavnkikikikaya", img: img3 },
            { url: "/glavnkikikikaya", img: img5},
            { url: "/glavnkikikikaya", img: img4},
            { url: "/glavnkikikikaya", img: img6 },
            { url: "/glavnkikikikaya", img: img7},
            { url: "/glavnkikikikaya", img: img8 },
            { url: "/glavnkikikikaya", img: img9},
      ]
      const map2 = map.map(a => MenuValidators(a.url, a.img, "Прихожие", a.img))
      return (
            <div className={style.NavLink2}>
                  {map2}
            </div>
      );
};
export default Прихожие;