import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >
      <Home></Home>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
