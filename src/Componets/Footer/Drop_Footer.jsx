import React from 'react';
import style from "../../css/Footer/Drop.module.css";
export const Drop_Footer = () => {
     return (
          <div className={style.Drop_Header}>
               <div className={style.Drop_block1}>Использование материалов с данного сайта, разрешена только по согласию с владельцем. Вся предоставленная на сайте информация ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса РФ</div>
               <div className={style.Drop_block2}>ИНН 6685187196КПП	668501001ОГРН	1216600030316</div>
               <div className={style.Drop_block3}>© 2008-2021 Mebel EkabuПолитика конфиденциальности
                    Дизайн: loginova.me</div>
          </div>
     );
};
