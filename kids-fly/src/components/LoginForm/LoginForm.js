import React, { useState } from 'react';
import { connect } from 'react-redux';
// import './LoginForm.css';
import { Link } from 'react-router-dom';
import { login } from '../../actions/Login';

function LoginForm(props) {
  const [formState, setFormState] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    props
      .login(formState)
      .then(
        () => console.log('hello world'),
        props.history.push('/profileForm')
      );
    setFormState({
      username: '',
      password: ''
    });
  };

  return (
    <div className='container login-form'>
      <h2 className='dipslay-4 text-center py-5'>
        Enter your Login Information
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Username</label>
          <input
            type='text'
            className='form-control'
            value={formState.name}
            onChange={handleChange}
            placeholder='Enter name'
            name='username'
            autoComplete='off'
          />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            value={formState.password}
            onChange={handleChange}
            placeholder='Password'
            name='password'
            autoComplete='off'
          />
        </div>

        <button type='submit' className='btn btn-success btn-block'>
          Login
        </button>
        <small>
          Need account{' '}
          <span className='text-danger'>
            <Link to='/signup'>Sign up</Link>
          </span>
        </small>
      </form>
    </div>
  );
}

export default connect(
  null,
  { login }
)(LoginForm);
