import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import data from '/Users/nadiachilds/Desktop/front-end/kids-fly/src/components/data.js';
import { Link } from 'react-router-dom';
 import UserRegister from '/Users/nadiachilds/Desktop/front-end/kids-fly/src/components/UserRegister.js'




function GetUserById() {
  const id = 4;
  return (
    <div className="id_list">
  
    {data.filter(info => info.id === id).map(info => (
        <div className="character-card" key={info.id}>
        
    <h2> First name: {info.first_name}</h2>
    <h2>  Last name:  {info.last_name}</h2>   
        <p> Email: {info.email}</p>

    <p> {info.phone} </p> 
    <p> {info.trip === "true" ? info.flight_msg: info.message}</p>
    <p> My Airport: {info.airport}</p> 
    <p> Destination:{info.trip === "true" ? info.trip_destination: info.message}</p>
    <p> Airline: {info.trip === "true" ? info.airline: info.message} </p>
      <p>  Departure Time: {info.trip === "true" ? info.departure: info.message} </p>
<p>  Children: {info.trip === "true" ? info.children: info.message} </p>
<button>{info.trip === "true" ? info.Del: info.message} </button>
<button>{info.trip === "true" ? info.Arriving_msg: info.message} </button>
<Link to="/ScheduleNew"> <button> Schedule New Trip</button> </Link>


<Link to="/UserRegister">  Register New User</Link>        
</div>


    ))}
    </div>

  );
 
 
}

//{info.trip=== false ?  info.trip_destination : info.message}
export default GetUserById

