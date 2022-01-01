import React from 'react';
const MainMaterial = () => {
          return (
                    <div>
<KuhneMaterial/>
                    </div>
          );
};
const MaterialCopy = ({title}) => {
          return (
                    <div>
                          <h1>{title}</h1>    
                    </div>
          );
};
const KuhneMaterial=()=>{
          return (
                    <div>
                         <MaterialCopy title={"КУХНИ НА ЗАКАЗ"}/> 
                    </div>
          );
}
export default MainMaterial;