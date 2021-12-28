import React from 'react';
import style from "../../../css/Kuhne.module.css"
import img from "../../../imgs/Гардеробные  стеллажные/1.jpg"
import img2 from "../../../imgs/Гардеробные  стеллажные/2.jpg"
import img3 from "../../../imgs/Гардеробные  стеллажные/3.jfif"
import img4 from "../../../imgs/Гардеробные  стеллажные/4.jfif"
import img5 from "../../../imgs/Гардеробные  стеллажные/5.jfif"
import img6 from "../../../imgs/Гардеробные  стеллажные/6.jfif"
import img7 from "../../../imgs/Гардеробные  стеллажные/7.jpg"
import img8 from "../../../imgs/Гардеробные  стеллажные/9.jfif"
import MenuValidators from '../../../Reduser/Validators/MenuValidators';
import img9 from "../../../imgs/Гардеробные  стеллажные/8.jpg"
const Гардеробные = () => {
          const map = [
                    { url: "/iki", img: img},
                    { url: "/ikiki", img: img2},
                    { url: "/glavnkikikikaya", img: img3 },
                    { url: "/glavnkikikikaya", img: img5},
                    { url: "/glavnkikikikaya", img: img4},
                    { url: "/glavnkikikikaya", img: img6 },
                    { url: "/glavnkikikikaya", img: img7 },
                    { url: "/glavnkikikikaya", img: img8 },
                    { url: "/glavnkikikikaya", img: img9 },
              ]
              const map2 = map.map(a => MenuValidators(a.url, a.img,"Гардеробные / стеллажные"))
              return (
                    <div className={style.NavLink2}>
                          {map2}
                    </div>
              );
};
export default Гардеробные;