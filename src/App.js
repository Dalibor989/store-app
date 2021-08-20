import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './styles/App.css';
import AppCustomers from './pages/AppCustomers';
import AppProducts from './pages/AppProducts';
import LatestPurchases from './pages/LatestPurchases';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </nav>
        <Switch>
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
