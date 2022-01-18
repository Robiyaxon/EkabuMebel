import style from "../../css/Material/Main_Material.module.css"
import { Shagov,React,Route,Kuhne} from '../../Imports';
const MainMaterial = () => {
   return (
      <div className={style.Wrapper}>
         <Route path="/mАТЕРИАЛЫ/kuhne" render={() => <Kuhne />} />
         <Shagov />

      </div>
   );
};
const Start = () => {
   return (
      <div>
         
      </div>
   );
};
export default MainMaterial;