import React from 'react';
import style from "../../../css/Kuhne.module.css"
import img from "../../../imgs/Полки  Ниши/1.jfif"
import img2 from "../../../imgs/Полки  Ниши/2.jfif"
import img3 from "../../../imgs/Полки  Ниши/3.jfif"
import img4 from "../../../imgs/Полки  Ниши/4.jfif"
import img5 from "../../../imgs/Полки  Ниши/5.jfif"
import img6 from "../../../imgs/Полки  Ниши/6.jpg"
import img7 from "../../../imgs/Полки  Ниши/7.jfif"
import img8 from "../../../imgs/Полки  Ниши/8.jfif"
import MenuValidators from '../../../Reduser/Validators/MenuValidators';
import img9 from "../../../imgs/Полки  Ниши/9.jfif"
const Ниши = () => {
          const map = [
                    { url: "/iki", img: img  },
                    { url: "/ikiki", img: img2},
                    { url: "/glavnkikikikaya", img: img3},
                    { url: "/glavnkikikikaya", img: img5 },
                    { url: "/glavnkikikikaya", img: img4 },
                    { url: "/glavnkikikikaya", img: img6},
                    { url: "/glavnkikikikaya", img: img7},
                    { url: "/glavnkikikikaya", img: img8 },
                    { url: "/glavnkikikikaya", img: img9},
              ]
              const map2 = map.map(a => MenuValidators(a.url, a.img,"Полки / Ниши"))
              return (
                    <div className={style.NavLink2}>
                          {map2}
                    </div>
              );
};
export default Ниши;