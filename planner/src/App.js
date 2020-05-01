import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
// import Signup from './components/Signup';
import CreateAccount from './components/CreateAccount';
import Dungeon from './components/Dungeon'

import './components/Signup.css';

import PrivateRoute from './components/PrivateRoute';


function App() {
 
  return (
    
    <div className="App">
    
     <Switch>
      <Route exact path='/' component={Welcome}/>
			{/* <Route path='/api/register' component={Signup}/> */}
      <Route path='/api/login' component={Login}/>
      <Route path='/api/registration' component={CreateAccount}/>
    <PrivateRoute>
      <PrivateRoute path='/api/adv/rooms/' component={Dungeon}/>
    </PrivateRoute>
    </Switch>

    

    </div>
  
  );
}

export default withRouter(App);
