import { React, Shagovstyle, reduxForm, img, watsap, img3, Shagov2 } from "../../../Imports"
import 'antd/dist/antd.css';
import { ShagovData } from "./ShagovData";
const map = [
     { id: 1, img: watsap, name: "НАПИСАТЬ В WHATSAPP" },
     { id: 2, img: img3, name: "НАПИСАТЬ В telegram" }]
const map2 = map.map(a => <a href="#a" key={a.id} className={Shagovstyle.wrapper}>
     <img src={a.img} alt="" />
     <h6>{a.name}</h6></a>)
const Shagov = () => {
     return (
          <div>
               <div className={Shagovstyle.Shagov}>
                    <div className={Shagovstyle.block1}>
                         <h1>УЗНАЙТЕ ТОЧНЫЕ СРОКИ И СТОИМОСТЬ </h1>
                         <div className={Shagovstyle.img}>
                              <p>Запишитесь на замер или отправьте нам готовый дизайн-проект. </p>
                              <img src={img} alt="" />
                         </div>
                    </div>
                    <div className={Shagovstyle.block2}>
                         {map2}
                    </div>    </div>
               <Shagov2 />
          </div>
     );
}
export const MyPostData = reduxForm({ form: "profile" })(ShagovData)
export default Shagov;