import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './styles/App.css';
import Home from './pages/Home';
import AppCustomers from './components/AppCustomers';
import AppProducts from './components/AppProducts';
import LatestPurchases from './components/LatestPurchases';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            {/* <li><Link to="/">Home</Link></li> */}
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </nav>
        <Switch>
          {/* <Route path="/">
            <Home />
          </Route> */}
          <Route path="/customers">
            <AppCustomers />
          </Route>
          <Route path="/products">
            <AppProducts />
          </Route>
          <Route path="/latest-purchases">
            <LatestPurchases />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
