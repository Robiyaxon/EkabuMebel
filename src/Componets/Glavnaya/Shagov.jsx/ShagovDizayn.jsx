import { React } from "../../../Imports";
import style from "../../../css/ShagovDizayn.module.css"
import img from "../../../imgs/dizayn 1.png"
export const ShagovDizayn = () => {
     return (
          <div className={style.Wrapper}>
               <h1 className={style.title}>Дизайнеры учтут все нюансы помещения и ответят на вопросы</h1>
               <div className={style.block}>
                    <img src={img} alt="" className={style.img} />
                    <div className={style.Block23}>
                         <p className={style.reference} >В шоу-руме на ул. Белинского, 169Б поможем определиться с материалами, фурнитурой и текстурами.</p>
                         <p className={style.reference}>Предложим лучшие варианты организации пространства, учитывая все ваши пожелания. </p>
                         <p className={style.reference}>Предоставим 3D-эскиз будущего изделия или всего помещения. </p>
                    </div>

               </div>
          </div>
     );
};
