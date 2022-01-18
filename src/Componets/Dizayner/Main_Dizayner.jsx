import style from "../../css/Dizayner/Main_Dizayner.module.css"
import React from "react";
import { DizaynerCopy } from "./map";
const Main_Dizayner = () => {
          return (
                    <div className={style.Wrapper}>
                              <h1 className={style.Title}>РАБОТЫ НАШИХ ДИЗАЙНЕРОВ</h1>
                              <DizaynerCopy/>
                     </div>
          );
};
export default Main_Dizayner;