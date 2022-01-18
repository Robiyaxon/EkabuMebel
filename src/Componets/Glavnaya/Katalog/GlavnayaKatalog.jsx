import React from 'react';
import style from "../../../css/MebelnayaKatalog.module.css"
import { GlavnayaKatalog2 } from './GlavnayaKatalog2';
import ValidatorsGlavnayaKatalog from '../../../Reduser/Validators/GlavnayaNavlink';
import axios from 'axios';
import { useState,useEffect } from 'react';
export const GlavnayaKatalog = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4200/glavnayaKatalog')
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));
    
  }, []);
    const map2 = data.map(a => <div key={a.id}>{ValidatorsGlavnayaKatalog(a.name, a.url)}</div>)
    return (
        <div className={style.GlavnayaKatalog} >
            <div className={style.Katalog}>
                {map2}
            </div>
            <div className={style.IMG}>  <GlavnayaKatalog2 /></div>
        </div>
    );
};
export default GlavnayaKatalog;