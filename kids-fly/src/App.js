import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import UserRegister from '/Users/nadiachilds/Desktop/front-end/kids-fly/src/components/UserRegister.js'
import GetUserById from '/Users/nadiachilds/Desktop/front-end/kids-fly/src/components/GetUser.js'
import ScheduleNew from  '/Users/nadiachilds/Desktop/front-end/kids-fly/src/components/ScheduleNew.js';
function App() {
  return (
    <div className="App">
   <Route path ="/GetUser/" component={GetUserById} />
   <Route path ="/UserRegister" component={UserRegister} />
   <Route path="/ScheduleNew" component={ScheduleNew} />
    </div>
  );
}

export default App;
