import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import EditTab from "./components/EditTab";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="m-container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/editpath">
            <EditTab />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
