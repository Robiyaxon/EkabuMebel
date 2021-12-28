import React from 'react';
import style from "../../../css/Kuhne.module.css"
import img from "../../../imgs/menu1.png"
import img2 from "../../../imgs/menu2.png"
import img3 from "../../../imgs/menu3.png"
import img4 from "../../../imgs/menu4.png"
import img5 from "../../../imgs/menu5.png"
import img6 from "../../../imgs/menu6.png"
import img7 from "../../../imgs/menu7.png"
import img8 from "../../../imgs/menu8.png"
import img9 from "../../../imgs/menu9.png"
import MenuValidators from '../../../Reduser/Validators/MenuValidators';
const Kuhne = () => {
      const map = [
            { id:1, img: img2, name: "Угловые кухни" },
            { id:2, img: img3, name: "П-образные кухни" },
            { id:3, img: img5, name: "Кухни с островом" },
            { id:4, img: img, name: "Прямые кухни" },
            { id:5,  img: img4, name: "Межкомнатные перегородки" },
            { id:6, img: img6, name: "Встроенные шкаф-купе" },
            { id:7, img: img7, name: "Угловые шкафы-купе" },
            { id:8, img: img8, name: "Радиусные шкафы-купе" },
            { id:9, img: img9, name: "Корпусные шкаф-купе" },
      ]
      const map2 = map.map(a => MenuValidators("/kuhne", a.img, a.name))
   
      return (
            <div className={style.NavLink2}>
                  {map2}
            </div>
      );
};
export default Kuhne;