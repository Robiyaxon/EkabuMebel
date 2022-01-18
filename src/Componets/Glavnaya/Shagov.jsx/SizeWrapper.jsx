import { React, Shagovstyle, stoll, message } from "../../../Imports";
import { newFunction } from "./newFunction";
export const SizeWrapper = (props) => {
     const [open, setOpen] = React.useState(false);
     const handleClickOpen = () => {
          setOpen(true);
     };
     const handleClose2 = () => {
          setOpen(false);
     };
     const handleClose = () => {
          setOpen(false);
          message.success('Успешно! Спасибо! Мы получили контакты и свяжемся с вами в ближайшее время.');
     };
     return (
          <div>
               {newFunction(open, handleClose2, handleClose)}
               <div className={Shagovstyle.sizeWrapper}>
                    <div className={Shagovstyle.size}>
                         <h1>Замерщики точно снимут размеры помещения</h1>
                         <div className={Shagovstyle.furniture}>
                              <p className={Shagovstyle.мебель}>Поэтому вся мебель безупречно впишется в пространство. </p>
                              <p className={Shagovstyle.мебель2}>Как проходит замер и условия предоставления вы можете посмотреть здесь.</p>
                              <div className={Shagovstyle.ButtonWrapper}>
                                   <button variant="outlined" className={Shagovstyle.ButtonAnt2} onClick={handleClickOpen}>
                                        Заказать замер
                                   </button>
                              </div>
                         </div>

                    </div>
                    <div className={Shagovstyle.sizeimg}><img src={stoll} alt="" /></div>
               </div>
          </div>

     );
};