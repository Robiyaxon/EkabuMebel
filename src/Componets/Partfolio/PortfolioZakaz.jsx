import { React, Field, Recuerd, Input } from "../../Imports";
import style from "../../css/Partfolio/PortfolioZakaz.module.css";
export const PortfolioZakaz = (props) => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ СПЕЦИАЛИСТА</h1>
      <div className={style.Block_Wrapper}>
        <div className={style.Block}>
          <p>После отправки контактов, мы наберем вас в ближайшее время. Или свяжитесь с нами самостоятельно:</p>
          <div className={style.social_Network_Wrapper}>
            <div className={style.tel}>salom telman</div>
            <div className={style.social_network}>salom men social networkman</div>
          </div>

        </div>
        <div className={style.Block2}>
          <form onSubmit={props.handleSubmit}>
            <Field component={Input} validate={[Recuerd]} name={"profileInput1"} className={style.Input} placeholder="Введите имя" />
            <Field component={Input} validate={[Recuerd]} name={"profileInput2"} className={style.Input} placeholder="+7 (999) 999 99 99" />
            <button className={style.button}>  ОТПРАВИТЬ ПРОЕКТ НА РАСЧЕТ </button>
          </form>

        </div>
      </div>
    </div>
  );
};
