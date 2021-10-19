import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from '../src/Pages/Home/Header/header'
import Services from './Pages/Home/Services/Services';
import Pagenotfound from './Pages/Pagenotfound/Pagenotfound';
import Servicedetails from './Pages/Singleservice/ServiceDetails/Servicedetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/Servicedetails/:serviceId">
            <Servicedetails></Servicedetails>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <Pagenotfound></Pagenotfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
