import {connect} from "react-redux"
import { GlavnayaReselect } from "../Reduser/Selector/Reselect"
import Glavnaya from "../Componets/Glavnaya/Glavnaya"
let mapStateToProps = (state) => {
 return { Glavnaya_Map: GlavnayaReselect(state) }
}
const Glavnaya_Menu = connect(mapStateToProps)(Glavnaya)
export default Glavnaya_Menu