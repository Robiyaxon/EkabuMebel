import { React, Recuerd, Shagovstyle, Input, Field } from "../../../Imports";

export const ShagovData = (props) => {

     return (
          <div className={Shagovstyle.Form}>
               <form onSubmit={props.handleSubmit}>
                    <Field component={Input} validate={[Recuerd]} name={"message"} className={Shagovstyle.input1} />
                    <Field component={Input} validate={[Recuerd]} name={"message2"} className={Shagovstyle.input1} />
                    <Field component={Input} validate={[Recuerd]} name={"message3"} className={Shagovstyle.input1} />
                    <button className={Shagovstyle.ButtonForm}>  Send </button>
               </form>
          </div>

     );

};
