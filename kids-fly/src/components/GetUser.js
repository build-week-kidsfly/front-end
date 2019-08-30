import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import data from '/Users/nadiachilds/Desktop/front-end/kids-fly/src/components/data.js';
import { Link } from 'react-router-dom';
 import UserRegister from '/Users/nadiachilds/Desktop/front-end/kids-fly/src/components/UserRegister.js'
 import pupper  from  "./pupper.jpg";
 import wing from './wing.jpg';
 import '../App.css';





function GetUserById() {
  const name = "Michael";
  return (
    
   
    <div className=""container>
    <div className="navbar">
               <nav> KidsFly</nav> <span id="menu-items"><nav className="nav2">Home </nav> <nav className="nav2">Profiles</nav> <nav className="nav2">Request Form</nav> <nav className="nav2">Admin</nav> <nav className="nav2">Logout </nav> </span>
           </div>

   <br/>
   <img className="pupper" src={pupper}></img>
     <h1> Account Info </h1> 
    {data.filter(info => info.username === name).map(info => (
        <div className="character-card" key={info.id}>
        <div className="card">
    <h2>First name: {info.first_name}</h2>
    <h2>Last name:  {info.last_name}</h2>   
    <h2> Email: {info.email}</h2>
    <h2> Phone: {info.phone} </h2> 
   </div>
   <div className="card">
    <h2 class="bold"> {info.trip === "true" ? info.flight_msg: info.message}</h2>

    <h2> {info.airport}</h2> 
    <h2>  {info.trip === "true" ? info.trip_destination: info.no_trip}</h2>
    <h2>  {info.trip === "true" ? info.airline: info.no_trip } </h2>
    <h2>   {info.trip === "true" ? info.departure: info.no_trip}  </h2>
    <h2> {info.trip === "true" ? info.children: info.no_trip } </h2>
    <button className="button" id="del" OnClick={info.trip === "false"}>{info.trip === "true" ? info.del: info.del} </button>
    <br/>
    <button className="button" > {info.trip === "true" ? info.arr: info.no_trip } </button>
    </div>
    <br/>
  <br/>
  <br/>
    <Link className="LinkStyle" to="/ScheduleNew"> <button className="button" id="sched">  Schedule New Trip</button> </Link>
    <br/>
    <br/>
    <br/>
       
</div>
))}
    </div>

  );
 
 
}

// <Link to="/UserRegister">  Register New User</Link>  

//{info.trip=== false ?  info.trip_destination : info.message}
export default GetUserById




