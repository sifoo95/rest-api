
import './App.css';
import {Switch , Route} from 'react-router-dom'
import ContactList from './pages/ContactList/ContactList';
import AddEditContact from './pages/AddEditContact/AddEditContact';
import errors from './pages/Errors/Errors'
import Navbar from './components/Navbar/Navbar';
//import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
   <Switch>
     <Route exact path='/' component={ContactList} />
     <Route exact path={['/addContact', '/editConatct/:id']} component={AddEditContact} />
     <Route exact path='/*' component={errors} />
   </Switch>
  {/*<Footer/>*/}
    </div>
  );
}

export default App;
