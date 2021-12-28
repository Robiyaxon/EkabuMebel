import { connect } from "react-redux"
import { NavbarReselect } from "../Reduser/Selector/Reselect"
import Navbar from "../Componets/Navbar/Navbar"
let mapStateToProps = (state) => {
    return { NavbarReselect: NavbarReselect(state) }
}
const Navbar_Menu = connect(mapStateToProps)(Navbar)
export default Navbar_Menu