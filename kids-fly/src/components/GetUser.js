import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import data from '/Users/nadiachilds/Desktop/front-end/kids-fly/src/components/data.js';
import { Link } from 'react-router-dom';
 import UserRegister from '/Users/nadiachilds/Desktop/front-end/kids-fly/src/components/UserRegister.js'
 import '../App.css';





function GetUserById() {
  const name = "Michael";
  return (
   
    <div className=""container>
     <h1>User Info</h1> 
    {data.filter(info => info.username === name).map(info => (
        <div className="character-card" key={info.id}>
        <div className="card">
    <h2> First name: {info.first_name}</h2>
    <h2>  Last name:  {info.last_name}</h2>   
    <p> Email: {info.email}</p>
    <p> Phone: {info.phone} </p> 
   </div>
   <div className="card">

  <br/>
  <br/>
  <br/>
    <p> {info.trip === "true" ? info.flight_msg: info.message}</p>
    <p> {info.airport}</p> 
    <p>  {info.trip === "true" ? info.trip_destination: info.no_trip}</p>
    <p>  {info.trip === "true" ? info.airline: info.no_trip } </p>
    <p>   {info.trip === "true" ? info.departure: info.no_trip}  </p>
    <p> {info.trip === "true" ? info.children: info.no_trip } </p>
    <button OnClick={info.trip === "false"}>{info.trip === "true" ? info.del: info.no_trip} </button>
    <button> {info.trip === "true" ? info.arr: info.no_trip } </button>
    </div>
    <br/>
  <br/>
  <br/>
    <Link to="/ScheduleNew"> <button> Schedule New Trip</button> </Link>
    <br/>
    <br/>
    <br/>
    <Link to="/UserRegister">  Register New User</Link>        
</div>
))}
    </div>

  );
 
 
}


//{info.trip=== false ?  info.trip_destination : info.message}
export default GetUserById




