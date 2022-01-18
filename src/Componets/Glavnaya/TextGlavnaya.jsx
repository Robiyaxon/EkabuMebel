import React from 'react';
import style from "../../css/Glavnaya/TextGlavnaya.module.css"
export const TextGlavnaya = () => {
    return (
        <div className={style.TextGlavnaya}>
            <div className={style.Block}><h6 className={style.h6}>Оказываем комплекс услуг</h6><p className={style.p}>Создаем дизайн-проект, производим и устанавливаем мебель.</p></div>
            <div className={style.Block}><h6 className={style.h6}>Разумные сроки изготовления</h6><p className={style.p}>От 10 до 40 рабочих дней. Зависит от наличия материалов на производстве.</p></div>
            <div className={style.Block}><h6 className={style.h6}>Проекты любой сложности</h6> <p className={style.p}>Благодаря высокой квалификации  мастеров производства и дизайнеров.</p></div>
            <div className={style.Block}><h6 className={style.h6}>Качественные материалы</h6><p className={style.p}>Используем только прочные, проверенные годами материалы.</p></div>
            <div className={style.Block}><h6 className={style.h6}>Мы за честные цены</h6><p className={style.p}>Не накручиваем торговую наценку, благодаря собственному производству.</p></div>
            <div className={style.Block}><h6 className={style.h6}>Реализуем любую вашу идею</h6><p className={style.p}>У нас более 100 000 материалов, цветов и текстур.</p></div>
        </div>
    );
};
