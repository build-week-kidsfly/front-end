import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addRequest } from '../actions/requestForm';
import { getFlights } from '../actions/getFlights';
import Navigation from './Page/Navigation';
// import GetFlights from './GetFlights';

import styled from 'styled-components';
// import { Link } from "react-router-dom";

const MinorStyle = styled.div`
  body {
    width: 100%;
    height: 100%;

    margin-top: 10%;
    transform: translateY(-20%);

    position: absolute;

    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }

  .form-container {
    margin: auto;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-size: cover;

    justify-content: center;
  }
  form {
    display: flex;
    max-width: 50%;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    align-content: center;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 30px;
    border-radius: 5px;
  }

  h2 {
    font-family: "Serif ", "Georgia ";
    text-shadow: 0 0 1px #1ab31a; 0 0 2px #1ab31a;
  }
  input {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 4%;
    font-family: 'Serif ', 'Georgia ';
    margin: 5px 0;
    background: transparent;
    border: 0px;
    border-bottom: 2px solid #1ab31a;
    padding: 10px;
    color: "white";
    width: 80%;
  }

  label{
    font-style: italic;
    background: lightgray;
    text-shadow: 0 0 1px #1ab31a; 0 0 2px #1ab31a;
    margin-top: 10px;
    padding: 5px;
  }
  select {
    display: flex;
    flex-direction: column;
    margin-right: 4%;
    font-family: "Serif ", "Georgia ";
    margin: 5px 0;
    background: transparent;
    border: 0px;
    border-bottom: 2px solid #1ab31a;
    padding: 10px;
    color: "white";
    width: 85%;
    margin-bottom: 17px;
  }

  button {
    background: #1ab31a;
    text-align: center;
    padding: 5px;
    border-radius: 30px;
    color: #0000ff;
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

function RequestForm(props) {
  console.log(props);
  const [user, setUser] = useState({
    no_of_kids: '',
    admin_on: '',
    no_of_assigned_admins: ''
  });

  const [flightInfo, setFlightInfo] = useState('');

  useEffect(() => {
    props.getFlights();
    setFlightInfo(props.flights);
  }, []);

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user);
    props.addRequest(user);
    setUser({
      selectFlight: '',
      no_of_kids: '',
      admin_on: '',
      no_of_assigned_admins: ''
    });
  };
  return (
    <MinorStyle>
      <Navigation />
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <h2 className='login_title'>Your Next Adventure</h2>
          <h4>Where are we headed? Just fill us in on some details about your next adventure and we'll do the rest!</h4>
          {/* <img className ="cutekid" src={cutekidairplane} alt="workplz"></img> */}

           <label>Airport</label>
              <input
                type='input'
                name='no_of_kids'
                placeholder='Airport'
                value={user.Airport}
                onChange={handleChange}
              />

              <label>Destination</label>
              <input
                type='input'
                name='destination'
                placeholder='Destination'
                value={user.Airport}
                onChange={handleChange}
              />

              <label>Number Of Kids</label>
              <input
                type='number'
                name='no_of_kids'
                placeholder='Enter Number Of Kids'
                value={user.numberOfKids}
                onChange={handleChange}
              />

           <label>Email Address</label>
              <input
                type='text'
                name='email address'
                placeholder='Email Address'
                value={user.emailaddress}
                onChange={handleChange}
              />

          <label>Departure Time</label>
              <input
                type='input'
                name='ndeparturetime'
                placeholder='Departure Time'
                value={user.departure}
                onChange={handleChange}
              />

              <label>Phone Number</label>
              <input
                type='input'
                name='phonenumber'
                placeholder='Phone Number'
                value={user.Airport}
                onChange={handleChange}
              />

          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </MinorStyle>
  );
}

const mapStateToProps = state => {
  console.log(state.getFlightReducer.flights);
  return {
    flights: state.getFlightReducer.flights
  };
};

export default connect(
  mapStateToProps,
  { addRequest, getFlights }
)(RequestForm);
