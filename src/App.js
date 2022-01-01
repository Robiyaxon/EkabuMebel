import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom'
import Dadam from './Componets/Glavnaya/a';
import GlavnayaContainer from './Container/GlavnayaContainer'
import Header from './Componets/Header/Header';
import NavbarMenu from './Container/NavbarContainer';
import Olma from './Componets/olma';
import './App.css';
import Kuhne from './Componets/Glavnaya/Menu/MenuItem/Kuhne';
import Footer from './Componets/Footer/Footer';
import MainMaterial from './Componets/Material/MainMaterial';
function App() {
  return (
    <div className='App' > 
<Header/>
<Router>
        <NavbarMenu />     
        <Switch>
           <Route exact  path='/'  render={()=><Redirect to="/glavnaya"/> } />
          <Route path='/mАТЕРИАЛЫ' component={MainMaterial} />
          <Route path='/Pосмотреть'  component={Dadam} /> 
          <Route path="/kuhne" render={() => <Kuhne />} />   
          <Route  path='/glavnaya'  render={()=><GlavnayaContainer/> } /> 
          <Route  path='*'  render={()=><div>404 NOT FOUND</div>} /> 
        </Switch>
      </Router> 
      <Footer/>
    </div> 
  );
}

export default App;