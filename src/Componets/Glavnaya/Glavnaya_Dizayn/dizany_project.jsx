import { React, book, reduxForm, Field, Recuerd, Input, watsap, telegram } from "../../../Imports";
import style from "../../../css/Glavnaya_dizayner.module.css"
const Dizany_project = () => {
     const onsubmit = () => {
          alert("xato")

     }
     return (
          <div className={style.wrapper2}>
               <div className={style.text}>
                    <h6>У вас уже есть готовый дизайн-проект?</h6>
                    <p>Отправьте нам для расчета стоимости и, если потребуется, предложим как можно улучшить ваш проект.</p>
                    <img src={book} alt="" />
               </div>
               <div className={style.Input}>
                    <p className={style.title}>Отправить проект на оценку</p>
                    <LoginForm onSubmit={onsubmit} />
                    <div className={style.internet}>
                         <div className={style.block_1}>
                              <img src={watsap} />
                              <a href="https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=en&gl=US">  Написать</a>
                         </div>
                         <div className={style.block_1}><img src={telegram} alt="" className={style.img3} />
                              <a href="https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=en&gl=US">  Написать</a>
                         </div>
                    </div>
               </div>
          </div>
     );
};
const dizany_project2 = (props) => {
     return (
          <div>
               <form onSubmit={props.handleSubmit}>
                    <Field component={Input} validate={[Recuerd]} name={"loginup"} className={style.Input2} />
                    <Field component={Input} validate={[Recuerd]} name={"loginup2"} className={style.Input2} />
                    <button className={style.button}>  ОТПРАВИТЬ ПРОЕКТ НА РАСЧЕТ </button>
               </form>

          </div>
     );
};
const LoginForm = reduxForm({ form: "loginup" })(dizany_project2)
export default Dizany_project;