import React from 'react';
import style from "../../../css/Shagov.module.css";
import shagov from "../../../imgs/Number.png"; 
const map=[
     {id:1, name:"Замер, договор и предоплата 50%",name2:"от 30 минут и до суток"},
     {id:2, name:"Дизайн-проект и чертежи",name2:"от суток до 3 дней"},
     {id:3, name:"Производство мебели",name2:"10-40 рабочих дней"},
     {id:4, name:"Оплата 50% и установка мебели ",name2:"от 1 рабочего дня"},
     {id:5, name:"Гарантия и сервис",name2:"в течение 12 месяцев "}
]
 const map2=map.map(a=><div key={a.id} className={style.dizayn_block}>
     <h6>{a.name}</h6>
         <p>{a.name2}</p>
     </div>)
export const Shagov2 = () => {
     return (
          <div className={style.Title}>
               <div><h1>5 шагов до интерьера вашей мечты</h1></div>
               <div><img src={shagov} alt="" /></div>
               <div className={style.Дизайн}>
                    {map2}
               </div>
          </div>
     );
};
