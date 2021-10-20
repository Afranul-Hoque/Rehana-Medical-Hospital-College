import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Pagenotfound from './Pages/Pagenotfound/Pagenotfound';
import Servicedetails from './Pages/Singleservice/ServiceDetails/Servicedetails';
import Authprovider from './Context/Authprovider';
import PrivateRoute from './Pages/Privateroute/PrivateRoute';
import Allservices from './Pages/AllServices/Allservices';
import Doctor from './Pages/Doctor/Doctor';
import Loginpage from './Pages/Loginpage/Loginpage';
import Registerpage from './Pages/Registerpage/Registerpage';
import Singlepageservice from './Pages/Singleservice/Singleserviceshow/Singlepageservice';

function App() {
  return (
    <div >
      <Authprovider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/allservices">
              <Allservices></Allservices>
            </PrivateRoute>
            <PrivateRoute path="/Singlepageservice/:serviceId">
              <Singlepageservice></Singlepageservice>
            </PrivateRoute>

            <Route path="/login">
              <Loginpage></Loginpage>
            </Route>
            <PrivateRoute path="/doctor">
              <Doctor></Doctor>
            </PrivateRoute>
            <Route path="/register">
              <Registerpage></Registerpage>
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
