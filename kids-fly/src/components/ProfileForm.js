import React, { useState } from 'react';

import { connect } from 'react-redux';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Navigation from './Page/Navigation';

import { addPerson } from '../actions/profileForm';
import styled from 'styled-components';

const Title = styled.h3`
  color: green;
  text-align: center;
  margin-top: 10%;
  font-weight: 300;
`;

const ProfileForm = props => {
  const [userInfo, setUserInfo] = useState({
    firstname: '',
    lastname: '',
    username: '',
    contact: '',
    image_url: ''
  });

  const handleChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props
      .addPerson(userInfo)
      .then(() => props.history.push('/adminPostAirport'));

    setUserInfo({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      image_url: ''
    });
  };

  return (
    <div>
      <Navigation />
      <Title>Great ! You signed up... Now lets get your profile setup.</Title>
      <Form
        onSubmit={handleSubmit}
        style={{ width: '50%', margin: '50px auto' }}
      >
        <FormGroup>
          <Label for='firstname'>First Name</Label>
          <Input
            className='form-control'
            type='text'
            name='firstname'
            id='firstname'
            placeholder='First Name...'
            value={userInfo.firstname}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='lastname'>Last Name</Label>
          <Input
            className='form-control'
            type='text'
            name='lastname'
            id='lastname'
            placeholder='Contact...'
            value={userInfo.lastname}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='username'>User Name</Label>
          <Input
            className='form-control'
            type='text'
            name='username'
            id='username'
            placeholder='Username...'
            value={userInfo.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='contact'>Contact</Label>
          <Input
            className='form-control'
            type='tel'
            name='contact'
            id='contact'
            placeholder='1-(555)-555-5555'
            value={userInfo.contact}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='image_url'>Image Url</Label>
          <Input
            className='form-control'
            type='file'
            name='image_url'
            id='image_url'
            placeholder='image...'
            value={userInfo.image_url}
            onChange={handleChange}
          />
        </FormGroup>

        <Button
          style={{
            marginTop: '20px',
            textDecoration: 'none',
            padding: '10px',
            backgroundColor: 'orangered',
            color: 'white'
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default connect(
  null,
  { addPerson }
)(ProfileForm);
