import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import {
          Recuerd
} from './Componets/FormControlls/FormControls';
import RoomIcon from '@material-ui/icons/Room';
import Shagovstyle from "./css/Shagov.module.css"
import {
          Input
} from './Componets/FormControlls/Teaxtaera';
import {
          Field,
          reduxForm
} from 'redux-form';
import img from "./imgs/strelka.png"
import img3 from "./imgs/telegram.png"
import viber from "./imgs/viber.svg"
import mymir from "./imgs/mymir.svg"
import stoll from "./imgs/stoll.png"
import Vera from "./imgs/Vera.png"
import Natalya from "./imgs/Natalya.png"
import book from "./imgs/10-(2) 1.png"
import Marina from "./imgs/Marina.png"
import watsap from "./imgs/watsapp (1).svg"
import telegram from "./imgs/telegram.png"
import Darya from "./imgs/Darya.png"
import {
          Route
} from 'react-router';
import VK from "./imgs/Footer/vk.png"
import {
          message,
          Button,
          Space
} from 'antd';
import {
          Shagov2
} from './Componets/Glavnaya/Shagov.jsx/Shagov2';

//Carousel
import {
          CCarousel,
          CCarouselItem
} from '@coreui/react';
import CraouselCaomponent1 from "./imgs/engkatta.png"
import CraouselCaomponent2 from "./imgs/Kttaekran.png"
import CraouselCaomponent3 from "./imgs/kichik3.jpg"
import CraouselCaomponent4 from "./imgs/katta3.jpg"

//DizaynerComponent
import DizaynetComponentimg1 from "./imgs/Dizayner/Vera.png";
import DizaynetComponentimg2 from "./imgs/Dizayner/Марина.png";
import DizaynetComponentimg3 from "./imgs/Dizayner/Дарья.png";
import DizaynetComponentimg4 from "./imgs/Dizayner/Наталья.png";

//ProfileComponent
import PortfolioComponent1 from "./imgs/Dizayner/img1.png"
import PortfolioComponent2 from "./imgs/Dizayner/img2.png"
import PortfolioComponent3 from "./imgs/Dizayner/img3.png"
import PortfolioComponent4 from "./imgs/Dizayner/img4.png"

//Glavnaya
import { TextGlavnaya } from './Componets/Glavnaya/TextGlavnaya';
import { MebelKatalog } from './Componets/Glavnaya/Katalog/MebelKatalog';
import Shagov from './Componets/Glavnaya/Shagov.jsx/Shagov';
import Glavnaya_Dizayn from './Componets/Glavnaya/Glavnaya_Dizayn/Glavnaya_Dizayn';
import Dizany_project from './Componets/Glavnaya/Glavnaya_Dizayn/dizany_project';
import Мастера from './Componets/Master/Мастера';
import { GlavnayaKatalog } from './Componets/Glavnaya/Katalog/GlavnayaKatalog';
import { SizeWrapper } from './Componets/Glavnaya/Shagov.jsx/SizeWrapper';
import Carousel from './Componets/Carousel/Carousel';
import { ShagovDizayn } from './Componets/Glavnaya/Shagov.jsx/ShagovDizayn';
import Reyting from './Componets/Glavnaya/Reyting';

//Reyting
import ReytingImg1 from "./imgs/yandex.svg"
import ReytingImg2 from "./imgs/logo12.png"
import ReytingImg3 from "./imgs/map.png"
import ReytingImg4 from "./imgs/flamp.png"
import { Rate } from 'antd';

//Header
import HeaderImg1 from "./imgs/Rectangle 21.png"
import HeaderImg2 from "./imgs/telegram.png"

//Mastera
import MasteraImg1 from "./imgs/cook.png"
import MasteraImg3 from "./imgs/cook3.png"
import Master2 from './Componets/Master/Master2';
import Master3 from './Componets/Master/Master3';



//MainMaterial
import Kuhne from './Componets/Glavnaya/Menu/MenuItem/Kuhne';

//MainPortfolio
import Portfolios from './Componets/Dizayner/Portfolios';
import { PortfolioZakaz } from './Componets/Partfolio/PortfolioZakaz';

//App
import Header from './Componets/Header/Header';
import NavbarMenu from './Container/NavbarContainer';
import Footer from './Componets/Footer/Footer';
import MainMaterial from './Componets/Material/MainMaterial';
import Glavnaya from './Componets/Glavnaya/Glavnaya';
import Main_Dizayner from './Componets/Dizayner/Main_Dizayner';
import Main_Kontact from './Componets/Kontact/Main_Kontact';
import MainPrortfolio from './Componets/Partfolio/Main_Prortfolio';
import {Switch, Redirect} from 'react-router-dom'
export {
          React,
          Switch,
          Redirect,
          MainPrortfolio,
          Main_Kontact,
          Main_Dizayner,
          Glavnaya,
          MainMaterial,
          Header,
          Footer,
          NavbarMenu,
          Kuhne,
          PortfolioZakaz,
          Portfolios,
          ReytingImg1,
          MasteraImg1,
          Master2,
          Master3,
          MasteraImg3,
          HeaderImg1,
          HeaderImg2,
          Rate,
          ReytingImg2,
          ReytingImg3,
          ReytingImg4,
          Мастера,
          Reyting,
          Carousel,
          ShagovDizayn,
          SizeWrapper,
          GlavnayaKatalog,
          TextGlavnaya,
          Dizany_project,
          Glavnaya_Dizayn,
          MebelKatalog,
          Shagov,
          PortfolioComponent1,
          PortfolioComponent2,
          PortfolioComponent3,
          PortfolioComponent4,
          DizaynetComponentimg1,
          DizaynetComponentimg2,
          DizaynetComponentimg3,
          DizaynetComponentimg4,
          Dialog,
          message,
          Button,
          Space,
          DialogContent,
          DialogContentText,
          DialogTitle,
          Recuerd,
          Shagovstyle,
          Input,
          Field,
          reduxForm,
          img,
          img3,
          stoll,
          Shagov2,
          Vera,
          Natalya,
          Marina,
          Darya,
          book,
          watsap,
          telegram,
          VK,
          QueryBuilderIcon,
          RoomIcon,
          Route,
          viber,
          mymir,
          CCarousel,
          CCarouselItem,
          CraouselCaomponent1,
          CraouselCaomponent2,
          CraouselCaomponent3,
          CraouselCaomponent4
}