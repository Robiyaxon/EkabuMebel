import React from 'react';
import style from "../../css/Material/MaterialCopy.module.css"
export const MaterialCopy = ({ title }) => {
      let map=[
            {id:1, name:"Оказываем комплекс услуг", name2:"Создаем дизайн-проект, производим и устанавливаем мебель."},
            {id:2, name:"Разумные сроки изготовления", name2:"От 10 до 40 рабочих дней. Зависит от наличия материалов на производстве."},
            {id:3, name:"Проекты любой сложности", name2:"Благодаря высокой квалификации  мастеров производства и дизайнеров."},
            {id:4, name:"Качественные материалы", name2:"Используем только прочные, проверенные годами материалы."},
            {id:5, name:"Мы за честные цены", name2:"Не накручиваем торговую наценку, благодаря собственному производству."},
            {id:6, name:"Реализуем любую вашу идею", name2:"У нас более 100 000 материалов, цветов и текстур."},
      ]
      const map2=map.map(a=><div className={style.Block}>
            <h6>{a.name}</h6>
            <p>{a.name2}</p>
      </div>)
      return (
            <div>
                  <h1 className={style.Title}>{title}</h1>
                  <div className={style.Wrapper}>
                         {map2}    
                  </div>
            </div>
      );
};
