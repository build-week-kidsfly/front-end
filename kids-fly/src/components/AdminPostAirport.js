import React, { useState } from 'react';
import { addAirport } from '../actions/addAirport';
import { connect } from 'react-redux';

const AdminPostAirport = props => {
  const [airport, setAirport] = useState({
    arrivalAirport: '',
    departureAirport: ''
  });

  const handleChange = e => {
    setAirport({
      ...airport,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addAirport(airport);
  };
  return (
    <div className='container py-5'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Departure Airport</label>
          <input
            type='text'
            className='form-control'
            name='departureAirport'
            placeholder='Enter airport'
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Arrival Airport</label>
          <input
            className='form-control'
            name='arrivalAirport'
            placeholder='Enter airport'
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addAirport }
)(AdminPostAirport);
