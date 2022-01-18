import style from "../../css/Master/Mastera.module.css"
import { MasteraImg3,MasteraImg1,Master2,Master3,React } from '../../Imports';
const Мастера = () => {
  return (
    <>
     <div className={style.Wrapper}>
      <h1 className={style.Title}>Мастера бережно изготовят  мебель из лучших материалов</h1>
      <div className={style.BigBlock}>
        <div className={style.block1}>
          <h4>Строго контролируем качество работ на собственном производстве</h4>
          <p className={style.более}>У нас более 30 мастеров со стажем от 5 до 25 лет. </p>
          <hr style={{ backgroundColor: "red", width: "80%", height:"4px" }} />
          <p className={style.более}>Перед тем как попасть к нам в команду, технолог производства проверяет навыки кандидатов на реальном проекте.</p>
          <hr style={{ backgroundColor: "red", width: "80%", height:"4px" }} />
          <p className={style.более}>Мебель производим на итальянских роботизированных станках Fielder. </p>
          <hr style={{  backgroundColor: "red", width: "80%", height:"4px" }} />
        </div>
        <div className={style.block2}>
          <picture>
            <source media="(min-width: 770px)" srcSet={MasteraImg1} />
            <source media="(min-width: 0)" srcSet={MasteraImg3} />
            <img src={MasteraImg1} alt="Flowers" style={{ width: "auto" }} />
          </picture>
        </div>
      </div>
    </div>
    <Master2/>
    <Master3/>
    </>
   
  );
};
export default Мастера;