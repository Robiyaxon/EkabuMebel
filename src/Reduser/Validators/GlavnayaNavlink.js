import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "../../css/MebelnayaKatalog.module.css"
export const GlavnayaKatalog = (name2,url) => {
    return (
            
                <div className={style.link2}> <NavLink to={url} className={style.link} >{name2}</NavLink></div> 
    );
};
export default GlavnayaKatalog;