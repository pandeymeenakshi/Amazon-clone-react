import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          {/* {tHIS IS DEFAULT PATH} */}
          <Route path="/">
            <Header />
            <Home />

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
