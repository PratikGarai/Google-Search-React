import './css/App.css';
import Home from './pages/Home';
import Result from './pages/Result';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            
          </Route>
        </Switch>
        <Home />
        <Result />
      </Router>
    </div>
  );
}

export default App;
