import { React, Dialog, DialogContent, DialogContentText, DialogTitle, Shagovstyle } from "../../../Imports";
import { MyPostData } from "./Shagov";

export function newFunction(open, handleClose2, handleClose) {
     return <Dialog
          open={open}

          onClose={handleClose2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
     >

          <DialogTitle className={Shagovstyle.DialogTitle} id="alert-dialog-title">{"Узнать стоимость изделия"}</DialogTitle>
          <DialogContent>
               <DialogContentText id="alert-dialog-description">
                    <MyPostData onSubmit={handleClose} />
               </DialogContentText>
          </DialogContent>
     </Dialog>;
}
