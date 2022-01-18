import {Switch,Route, Redirect, Header,NavbarMenu,Footer,MainMaterial,Glavnaya,Main_Dizayner,Main_Kontact, MainPrortfolio } from './Imports';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <div className='App' > 
<Header/>
<Router>
        <NavbarMenu />     
        <Switch>
           <Route exact  path='/'  render={()=><Redirect to="/glavnaya"/> } />
           <Route path='/mАТЕРИАЛЫ' component={Main_Dizayner} />
           <Route path='/Pосмотреть'  component={Main_Dizayner} /> 
           <Route path='/kontact'  component={Main_Kontact} /> 
           <Route path='/portfolio'  component={MainPrortfolio} /> 
           <Route  path='/glavnaya'  render={()=><Glavnaya/> } /> 
           <Route  path='*'  render={()=><Redirect to="/glavnaya"/>} /> 
        </Switch>
</Router> 
<Footer/>
    </div> 
  );
}
export default App;