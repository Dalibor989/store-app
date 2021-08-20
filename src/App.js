import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './styles/App.css';
import Home from './pages/Home';
import AppCustomers from './components/AppCustomers';
import AppProducts from './components/AppProducts';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/customers">
            <AppCustomers />
          </Route>
          <Route path="/products">
            <AppProducts />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
