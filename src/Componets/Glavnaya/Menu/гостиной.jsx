import React from 'react';
import style from "../../../css/Glavnaya/Kuhne.module.css"
import img from "../../../imgs/Мебель для гостиной/1.jfif"
import img2 from "../../../imgs/Мебель для гостиной/2.jfif"
import img3 from "../../../imgs/Мебель для гостиной/3.jfif"
import img4 from "../../../imgs/Мебель для гостиной/4.jfif"
import img5 from "../../../imgs/Мебель для гостиной/5.jfif"
import img6 from "../../../imgs/Мебель для гостиной/6.jfif"
import img7 from "../../../imgs/Мебель для гостиной/7.jfif"
import img8 from "../../../imgs/Мебель для гостиной/8.jfif"
import MenuValidators from '../../../Reduser/Validators/MenuValidators';
import img9 from "../../../imgs/Мебель для гостиной/9.jfif"
const Гостиной = () => {
          const map = [
                    { url: "/iki", img: img },
                    { url: "/ikiki", img: img2},
                    { url: "/glavnkikikikaya", img: img3},
                    { url: "/glavnkikikikaya", img: img5},
                    { url: "/glavnkikikikaya", img: img4 },
                    { url: "/glavnkikikikaya", img: img6},
                    { url: "/glavnkikikikaya", img: img7},
                    { url: "/glavnkikikikaya", img: img8},
                    { url: "/glavnkikikikaya", img: img9},
              ]
              const map2 = map.map(a => MenuValidators(a.url, a.img, "Мебель для гостиной",a.img))
              return (
                    <div className={style.NavLink2}>
                          {map2}
                    </div>
              );
};
export default Гостиной;