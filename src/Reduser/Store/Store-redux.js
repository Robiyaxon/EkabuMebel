import GlavnayaReduser from "../GlavnayaReduser"
import Navbar_Reduser from "../NavbarReduser";
import { reducer as formReducer } from "redux-form"
const { createStore, combineReducers } = require("redux");
let reducers = combineReducers({
    GlavnayaReduser: GlavnayaReduser,
    Navbar_Reduser:Navbar_Reduser,
    form: formReducer, 
});
let store = createStore(reducers);
export default store;
window.store = store;