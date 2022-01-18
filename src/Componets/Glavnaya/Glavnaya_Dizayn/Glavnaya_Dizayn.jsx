import { React, Vera,Natalya,Marina,Darya } from "../../../Imports";
import style from "../../../css/Glavnaya/Glavnaya_dizayner.module.css"
import { NavLink } from "react-router-dom";
const map=[
          {name:"Вера",img:Vera},
          {name:"Марина",img:Marina},
          {name:"Дарья",img:Darya},
          {name:"Наталья",img:Natalya}
]
const map2=map.map(a=> <div key={a.name} className={style.block}>
          <img src={a.img} alt="" />
          <p>{a.name}</p>
          <NavLink style={{color:"black"}} to="/Pосмотреть">Посмотреть работы</NavLink>
</div>)
const Glavnaya_Dizayn = () => {
          return (
                    <div className={style.Wrapper}>
                       {map2}      
                    </div>
          );
};
export default Glavnaya_Dizayn;