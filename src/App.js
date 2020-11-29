import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebNavbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import MyResume from './pages/Resume/Resume';
import {Switch, Route} from 'react-router-dom'
import Projects from './pages/Projects/Projects';
import MyHomebodyCooks from './pages/HomebodyCooks/HomebodyCooks';
import Nextagram from './pages/Nextagram/Nextagram'
import LiveChatRoom from './pages/LiveChatRoom/LiveChatRoom';
import Inventory from './pages/InventoryManagementSystem/InventoryManagementSystem';

function App() {
  return (
   <>
   <WebNavbar/>
   <Switch>
     <Route exact path ="/"><Homepage/></Route>
     <Route path = "/resume"><MyResume/></Route>
     <Route exact path = "/projects/"><Projects/></Route>
     <Route path = "/projects/HomebodyCooks"><MyHomebodyCooks/></Route>
     <Route path = "/projects/Nextagram"><Nextagram/></Route>
     <Route path="/projects/LiveChatRoom"><LiveChatRoom/></Route>
     <Route path ="/projects/Inventory"><Inventory/></Route>
   </Switch>
  
   
   </>
  );
}

export default App;
