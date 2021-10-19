import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Services from './Pages/Home/Services/Services';
import Pagenotfound from './Pages/Pagenotfound/Pagenotfound';
import Servicedetails from './Pages/Singleservice/ServiceDetails/Servicedetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Authprovider from './Context/Authprovider';
import Header from './Pages/Home/Header/Header';
import PrivateRoute from './Pages/Privateroute/PrivateRoute';

function App() {
  return (
    <div >
      <Authprovider>
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
            <PrivateRoute path="/Servicedetails/:serviceId">
              <Servicedetails></Servicedetails>
            </PrivateRoute>

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
      </Authprovider>


    </div>
  );
}

export default App;
