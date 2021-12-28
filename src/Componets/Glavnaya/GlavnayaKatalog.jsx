import React from 'react';
import style from "../../css/MebelnayaKatalog.module.css"
import { GlavnayaKatalog2 } from './GlavnayaKatalog2';
import ValidatorsGlavnayaKatalog from '../../Reduser/Validators/GlavnayaNavlink';
export const GlavnayaKatalog = () => {
    const map=[
       {id:1, url:"/glavnaya", name:"  Шкафы-купе"},
       {id:2, url:"/glavnaya/ванной", name:" Мебель для ванной"},
       {id:3, url:"/glavnaya/Прихожие", name:"  Прихожие"},
       {id:4, url:"/glavnaya/детскаяМебел", name:"    Детская мебель"},
       {id:5, url:"/glavnaya/Гардеробные", name:"Гардеробные / стеллажные"},
       {id:6, url:"/glavnaya/Гостиной", name:"  Мебель для гостиной"},
       {id:7, url:"/glavnaya/Ниши", name:" Полки / Ниши"},
       {id:8, url:"/glavnaya/Прихожие", name:"   Кабинеты и Библиотеки"},
       {id:9, url:"/glavnaya/детскаяМебел", name:" Межкомнатные перегородки"},
       {id:10, url:"/glavnaya/Гостиной", name:" Мебель для спальной"},
       {id:11, url:"/glavnaya/Прихожие", name:"   Мебель из массива"},
       {id:12, url:"/glavnaya/Гостиной", name:"  Офисная мебель"},
       {id:13, url:"/glavnaya/Гардеробные", name:"  Мебель с мягкими декорами"},
       {id:14, url:"/glavnaya/детскаяМебел", name:"  Мебель Лофт"},
       {id:15, url:"/glavnaya/Гостиной", name:"   Системы складных дверей"},    ]
    const map2=map.map(a=><div key={a.id}>{ValidatorsGlavnayaKatalog(a.name,a.url)}</div> )
    return (
        <div className={style.GlavnayaKatalog} >
            
       <div className={style.Katalog}>
          {map2}
       </div>
            <div className={style.IMG}>  <GlavnayaKatalog2/></div>
        </div>
    );
};
export default GlavnayaKatalog;