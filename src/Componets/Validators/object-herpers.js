import a from "../Validators/helps.module.css"
import '../../css/Glavnaya.css'
import React, { useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
const ModalExample  = (img, img2, text, ...props) => {
  const {
    className
  } = props;
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [ setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  return (
  
      <Objectherpers toggle={toggle} modal={modal} text={text} img2={img2} img={img} toggleNested={toggleNested} />
   

  );
}
class Objectherpers extends React.Component{
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  render() {
    return (
      <div className={a.Header} >
        <Button color="" className={a.button}  onClick={this.props.toggle}><img src={this.props.img} className={a.IMG} alt="" />
          <p className={a.Text}>{this.props.text}</p>
        </Button>
        <Modal  ref={this.inputRef} isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader  toggle={this.props.toggle}>{this.props.text}</ModalHeader>
          <ModalBody >
            <img ref={this.inputRef} src={this.props.img2} alt="" className="TRB" />
            <Modal  isOpen={this.props.nestedModal} toggle={this.props.toggleNested} ref={this.inputRef} onClosed={this.props.closeAll ? this.props.toggle : undefined}>

            </Modal>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalExample;