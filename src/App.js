import logo from './logo.svg';
import './App.css';
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Signup} from './components/Signup';
import {Home} from './components/Home';
import {Login} from './components/Login';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path= "/" component ={Home}/>
            <Route  path= "/signup" component ={Signup}/>
            <Route  path= "/login" component ={Login}/>


        </Switch>
      <Navbar/>
    </BrowserRouter>
  );
}

export default App;
