import React from 'react';
import { Rate } from 'antd';
import img1 from "../../imgs/yandex.svg"
import img2 from "../../imgs/logo12.png"
import img3 from "../../imgs/map.png"
import img4 from "../../imgs/flamp.png"
import style  from "../../css/Reyting.module.css"
const desc = ['20%', '40%', '50%', '60%', '100%'];
class Reyting extends React.Component {
    
          state = {
                    value: 3,
                    value2: 2,
                    value3: 4,
                    value4: 5,
                  };
    
                
                  handleChange = (value,value2) => {
                    this.setState({ value });
                  };
                  handleChange2 = value2 => {
                    this.setState({ value2 });
                  };
                  handleChange3 = value3 => {
                    this.setState({ value3 });
                  };
                  handleChange4 = value4 => {
                    this.setState({ value4 });
                  };
          render() {
                    const { value } = this.state;
                    const { value2 } = this.state;
                    const { value3 } = this.state;
                    const { value4 } = this.state;
                    return (
                              <div className={style.Wrapper}>
                          <div className={style.block}>
          <img src={img1} alt="" />
          <div>
       <Rate tooltips={desc} onChange={this.handleChange} value={value} />
       {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
     </div>
     <p>Выберите звезду</p>
                             </div>
                          <div className={style.block}>
          <img src={img2} alt="" />
          <div>
       <Rate tooltips={desc} onChange={this.handleChange2} value={value2} />
       {value2 ? <span className="ant-rate-text">{desc[value2 - 1]}</span> : ''}
     </div>
     <p>Выберите звезду</p>
                             </div>
                          <div className={style.block}>
          <img src={img3} alt="" />
          <div>
       <Rate tooltips={desc} onChange={this.handleChange3} value={value3} />
       {value3 ? <span className="ant-rate-text">{desc[value3 - 1]}</span> : ''}
     </div>
     <p>Выберите звезду</p>
                             </div>
                          <div className={style.block}>
          <img src={img4} alt="" />
          <div>
       <Rate tooltips={desc} onChange={this.handleChange4} value={value4} />
       {value4 ? <span className="ant-rate-text">{desc[value4 - 1]}</span> : ''}
     </div>
     <p>Выберите звезду</p>
                             </div>
                               </div>
                    );
          }
}
export default Reyting;
