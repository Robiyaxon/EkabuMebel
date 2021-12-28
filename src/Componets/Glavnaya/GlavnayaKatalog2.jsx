import React from 'react';
import { Route } from 'react-router';

import Kuhne from "./Menu/Kuhne"
import вaнной from "./Menu/вaнной"
import прихожие from "./Menu/прихожие"
import детскаяМебел from "./Menu/детскаяМебел"
import Гардеробные from "./Menu/Гардеробные"
import Гостиной from "./Menu/гостиной"
import Ниши from "./Menu/Ниши"
export const GlavnayaKatalog2 = () => {
    return (
        <div>   <Route exact path="/glavnaya" render={() => <Kuhne />} />
                  <Route path='/glavnaya/ванной'  component={вaнной} /> 
                  <Route path='/glavnaya/прихожие'  component={прихожие} /> 
                  <Route path='/glavnaya/детскаяМебел'  component={детскаяМебел} /> 
                  <Route path='/glavnaya/Гардеробные'  component={Гардеробные} /> 
                  <Route path='/glavnaya/Гостиной'  component={Гостиной} /> 
                  <Route path='/glavnaya/Ниши'  component={Ниши} /> 
              
          
                       

  
        </div>
    );
};
