import style from "../../css/Dizayner/Portfolios.module.css"
import { PortfolioComponent4, PortfolioComponent1, PortfolioComponent2, PortfolioComponent3, React } from "../../Imports";
import { useReducer } from 'react';
import { Image } from 'antd';
import "../../App.css"
const map3 = [
   { img: PortfolioComponent1, title: "Дизайн-проект в стиле лофт" },
   { img: PortfolioComponent2, title: "Прихожая с шкаф-купе" },
   { img: PortfolioComponent3, title: "Кухня в стиле прованс" },
   { img: PortfolioComponent4, title: "Тумба под ТВ" }
]
const map4 = map3.map(a =>
   <div className={style.Block} key={a.img}>
      <Image
         width={"100%"}
         src={a.img} />
      <p className={style.title}>{a.title}</p>
   </div>
)
const Portfolios = (props) => {
   debugger
   return (
      <div>
         <div className={style.Partfolios}>
            {map4}
            {map4}
            {props.show && <>{map4}</>}
         </div>
         <div className={style.Block_Button}>
            <button onClick={props.Click} className={style.Button}>{props.show === false ? props.text : "Засрыть"}</button></div>
            <h1>{props.clik}</h1>
      </div>
   );
};
export default Portfolios;