import style from "../../css/Footer/Block2.module.css";
import {VK,React,QueryBuilderIcon,RoomIcon} from "../../Imports"
import instagram from "../../imgs/Footer/instagram.svg"
export const Block2 = () => {
          return (
                    <div className={style.Block2}>
                              <h1 className={style.Block2_Title}>ПОСЕТИТЕ НАШ ШОУ-РУМ</h1>
                              <div className={style.Block2_Map}>
                                        <div className={style.Block2_Map_Adress}>
                                                  <RoomIcon style={{ color: "white" }} />
                                                  <p >г. Екатеринбургул. Белинского, 169Б</p>
                                        </div>
                                        <div className={style.Block2_Map_Adress}>
                                                  <QueryBuilderIcon style={{ color: "white" }} />
                                                  <p >г. Екатеринбургул. Белинского, 169Б</p>
                                        </div>
                              </div>
                              <p className={style.соцсетях}>Следите за нами в соцсетях</p>
                              <div className={style.Block2_Map}>
                                        <div className={style.Block2_Map_Adress}>
                                                  <img src={VK} alt="" />
                                                  <a href="https://vk.com/?lang=en" className={style.Block2_url}>Подписаться в VK</a>
                                        </div>
                                        <div className={style.Block2_Map_Adress}>
                                                  <img src={instagram} alt="" />
                                                  <a href="https://www.instagram.com/" className={style.Block2_url}>Подписаться в Instagram</a>
                                        </div>
                              </div>
                    </div>
          );
};
