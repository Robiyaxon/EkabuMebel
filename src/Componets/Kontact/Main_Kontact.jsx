import style from "../../css/Kontack/Main_Kontack.module.css"
import { watsap, React, telegram, viber, mymir } from '../../Imports';
const map = [
  { name: watsap, title: " WhatsApp", url: "#" },
  { name: telegram, title: "  Telegram", url: "#" },
  { name: viber, title: "Viber", url: "#" }
]
const map2 = map.map(a => <div className={style.social_network_Wrapper}>
  <img src={a.name} alt="image" />
  <a href={a.url} className={style.social_network}>Написать в {a.title}</a>
</div>)
const map3 = [
  { name: "ООО «МЕБЕЛЬ ЕКА»" },
  { name: "ИНН 6685187196»" },
  { name: "КПП 668501001" },
  { name: "ОГРН	1216600030316" },
  { name: "ТОЧКА ПАО БАНКА «ФК ОТКРЫТИЕ»" },
  { name: "Р/с 40702810102500100006" },
  { name: "БИК 044525999" },
  { name: "К/с 30101810845250000999" },
  { name: `Адрес юридический: 620089, г. Екатеринбург, ул. Белинского, 169Б` },
  { name: `Адрес фактический: 620089, г. Екатеринбург, ул. Белинского, 169Б` },
  {
    name: `
          Директор: Завьялов Александр Иванович, действует на основании Устава` }
]
const map4 = map3.map(a => <p>{a.name}</p>)
const MainKontact = () => {
  return (
    <div className={style.Wrapper}>
      <h1 className={style.title}>контакты</h1>
      <div className={style.Internet_adres}>
        <div className={style.Block}>
          <a href="tel:8 (343) 2 868 395" className={style.Tel}>8 (343) 2 868 395</a>
          <a href="tel:8 (902) 8 777 952" className={style.Tel}>8 (902) 8 777 952</a>
          <a href="tel:8 (950) 2 088 909" className={style.Tel}>8 (950) 2 088 909</a>
        </div>
        <div className={style.Block}>
          {map2}

        </div>
        <div className={style.Block}>
          <div >
            <img src={mymir} alt="" />
            <a href="#" className={style.social_network}>mebel-ekabu@yandex.ru</a>
          </div>

        </div>
        <div className={style.Block}>

          <a href="tel:8 (343) 2 868 395" className={style.message_Send}>НАПИСАТЬ ДИРЕКТОРУ</a>
        </div>
      </div>
      <div className={style.организации}>
        <h1>Реквизиты организации</h1>
        {map4}
      </div>
    </div>
  );
};
export default MainKontact;