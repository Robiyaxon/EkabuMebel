import React from 'react';
import style from "../../css/Footer/MainFooter.module.css"
import { Block2 } from './Block2';
import { Drop_Footer } from './Drop_Footer';
import Map2 from './Map';
const Footer = () => {
     return (
          <div className={style.Wrapper}>
               <Block2 />
               {/* <Placemark geometry={[41.316441, 69.294861]} />
          <Placemark geometry={[40.768810,72.236282]} /> */}
               <Map2 />
               <  Drop_Footer />
          </div>
     );
};
export default Footer;