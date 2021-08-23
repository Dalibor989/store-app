import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import AppCustomers from './pages/AppCustomers';
import AppProducts from './pages/AppProducts';
import LatestPurchases from './pages/LatestPurchases';
import BuyProducts from './pages/BuyProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/customers">
            <AppCustomers />
          </Route>
          <Route exact path="/products">
            <AppProducts />
          </Route>
          <Route path="/customers/:id">
            <LatestPurchases />
          </Route>
          <Route path="/products/:id">
            <BuyProducts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
