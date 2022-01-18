import React from 'react';
import video1 from "../../imgs/video1.mp4"
import "antd/dist/antd.css";
import style from   "../../css/Master/Master2.module.css"
import { Master5 } from './Master5';
const Master2 = () => {
          return (
                    <>
                     <div className={style.Wrapper}>
                      <h1 className={style.Title}>Ваш ПРОЕКТ В НАДЕЖНЫХ РУКАХ — Посмотрите отзывы и убедитесь в этом сами </h1>           
                    {Master5(video1,video1, style.Video_Block1)} </div>
                    </>
                   
          );
};
export default Master2;