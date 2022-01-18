import React from 'react';
import { useReducer } from 'react';
import {  Portfolios } from '../../Imports';
const PortfoliosReducer = (state, action) => {
    switch (action.type) {
              case "PORTFOLIOSREDUSER_CLICK":
                        return {
                                  show: !state.show,
                                            text: state.text
                        }
                        default:
                                  return state
    }
}
const PortfoliosContainer = () => {
          const [state, dispatch] = useReducer(PortfoliosReducer,{ show: false, text:"open" });
          const Click = () => {
                    dispatch({type:"PORTFOLIOSREDUSER_CLICK"})
          }
          return (
                    <>
<Portfolios Click={Click}  show={state.show} text={state.text}  />
                    </>
          );
};
export default PortfoliosContainer