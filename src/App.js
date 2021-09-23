import logo from './logo.svg';
import './App.css';
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Signup} from './components/Signup';
import {Home} from './components/Home';
import {Login} from './components/Login';
import { vendedor } from './components/vendedor';
import { AddProducts } from './components/AddProducts';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route  path= "/home" component ={Home}/>
            <Route  path= "/signup" component ={Signup}/>
            <Route  path= "/login" component ={Login}/>
            <Route  path= "/vendedor" component={vendedor}/>
            <Route  path= "/add-products" component={AddProducts}/>

        </Switch>
      <Navbar/>
    </BrowserRouter>
  );
}

export default App;
