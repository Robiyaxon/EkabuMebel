import { React, reduxForm, message ,PortfolioZakaz } from "../../Imports";
import style from "../../css/Partfolio/Main_Portfolio.module.css"
import PortfoliosContainer from './PortfoliosContainer';
import axios from 'axios';
import { useState,useEffect } from 'react';
const MainPrortfolio = () => {
          const [data, setData] = useState([]);
useEffect(() => {
  axios
    .get('http://localhost:4200/portfolio')
    .then(function(response) {
      setData(response.data)
      console.log(response.data);
    })
    .catch(error => console.log(error));
  
}, []);
const map2 = data.map(a =>
          <div key={a.name}>
                    <h1 className={style.taype}>{a.name}</h1>
                    <PortfoliosContainer  />
          </div>)
          const onsubmit = (formData) => {
                    message.success('Успешно! Спасибо! Мы получили контакты и свяжемся с вами в ближайшее время.');
                    formData.profileInput1=""
formData.profileInput2=""

          }
          return (
                    <div className={style.Wrapper}>
                              <h1 className={style.title}>ПОРТФОЛИО РАБОТ ПО СТИЛЯМ</h1>
                              {map2}
                              <ZakazForm onSubmit={onsubmit} />
                    </div>
          );
};
const ZakazForm = reduxForm({ form: "Portfolio" })(PortfolioZakaz)
export default MainPrortfolio;