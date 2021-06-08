import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

const HatsPage = (props) => {
  console.log(props.match.path);
  return (
    <div>
      <Link to='/'>Home</Link>
      <h1>SOUPA Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
