import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route exact path="/products" component={ Products }></Route>
      </Switch>
    </div>
  );
}

export default App;
