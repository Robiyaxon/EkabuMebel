import style from "../../css/Dizayner/Main_Dizayner.module.css";
import { DizaynetComponentimg1, DizaynetComponentimg2, DizaynetComponentimg3, DizaynetComponentimg4, React } from "../../Imports";
import Shagov from "../Glavnaya/Shagov.jsx/Shagov";
import PortfoliosContainer from "../Partfolio/PortfoliosContainer";
const map = [
          { name: "Вера", id: 1, img: DizaynetComponentimg1 },
          { name: "Марина", id: 2, img: DizaynetComponentimg2 },
          { name: "Дарья", id: 3, img: DizaynetComponentimg3 },
          { name: "Наталья", id: 4, img: DizaynetComponentimg4 }
];
const map2 = map.map(a => <div key={a.name}>
          <div className={style.Dizayner_Block}>
                    <img src={a.img} alt="" />
                    <div className={style.Block}>
                              <h6>{a.name}</h6>
                              <p>1-2 предложение об опыте, навыках. Может дизайнер специализируется только в определенных стилях или работает только с кухнями.</p>
                              <button>ОБСУДИТЬ ПРОЕКТ С ДИЗАЙНЕРОМ</button>
                    </div>
          </div>
          <PortfoliosContainer />
</div>

);
export const DizaynerCopy = (img) => {
          return (
                    <div>
                              {map2}
                              <Shagov />
                    </div>
          );
};
