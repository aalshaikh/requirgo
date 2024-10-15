import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './landing/home';
import Login from './auth/Login';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/auth/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
