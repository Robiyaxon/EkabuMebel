import React from 'react';
import style from "../../css/Kuhne.module.css"
import { NavLink } from 'react-router-dom';
const MenuValidators = (url,img1,name, key) => {
      
          return (
                          <NavLink  key={key} to={url} className={style.Wrapper }>
                                <div >
                                      <img className={style.btn1} src={img1} alt="" />
                                      <p className={style.ValidatorsP}>{name}</p>
                                </div>
                          </NavLink>     
                         
          );
};
export default MenuValidators;