import React from 'react';
import Carousel from './Carousel/Carousel';
import "../../css/Glavnaya.css"
import { TextGlavnaya } from './TextGlavnaya';
import { MebelKatalog } from './MebelKatalog';
import { GlavnayaKatalog } from './GlavnayaKatalog';
import Shagov from './Shagov.jsx/Shagov';
import Glavnaya_Dizayn from './Glavnaya_Dizayn/Glavnaya_Dizayn';
import Dizany_project from './Glavnaya_Dizayn/dizany_project';
import Мастера from './Мастера';
import Master2, { Master3 } from './Master2';
import Reyting from './Reyting';
const Glavnaya = (props) => {
    return (
        <div className='Glavnaya'>
           <Carousel/>
           <TextGlavnaya/>
           <MebelKatalog/>
           <GlavnayaKatalog/>
           <Shagov/>
           <Glavnaya_Dizayn/>
           <Dizany_project/>
           <Мастера/>
           <Master2/>
           <Master3/>
           <Reyting/>
      </div>
       
    );
};
export default Glavnaya;
