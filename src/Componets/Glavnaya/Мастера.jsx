import React from 'react';
import style from "../../css/Mastera.module.css"
import img1 from "../../imgs/cook.png"
import img3 from "../../imgs/cook3.png"
const Мастера = () => {
          return (
                    <div className={style.Wrapper}>
<h1 className={style.Title}>Мастера бережно изготовят  мебель из лучших материалов</h1> 
<div className={style.BigBlock}>
          <div className={style.block1}>
<h4>Строго контролируем качество работ на собственном производстве</h4>
<p className={style.более}>У нас более 30 мастеров со стажем от 5 до 25 лет. </p>
<hr  style={{color:"#B71C1C",  width: "70%"}}/>
<p className={style.более}>Перед тем как попасть к нам в команду, технолог производства проверяет навыки кандидатов на реальном проекте.</p>
<hr  style={{color:"#B71C1C",  width: "70%"}}/>
<p className={style.более}>Мебель производим на итальянских роботизированных станках Fielder. </p>
<hr  style={{color:"#B71C1C", width: "70%"}}/>
          </div>
          <div className={style.block2}>
          <picture>
          <source media="(min-width: 770px)" srcset={img1}/>
          <source media="(min-width: 0)" srcset={img3}/>
  <img src={img1} alt="Flowers" style={{width: "auto"}}/>
</picture>


          </div>
</div>

                   </div>
          );
};
export default Мастера;