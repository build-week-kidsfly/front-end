import React, { useState } from 'react';
// import Navigation from './components/Page/Navigation';

const AdminPage = () => {
  const [admin, setAdmin] = useState({
    airport_id: '',
    user_id: '',
    admin_location: ''
  });

  const handleChange = e => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <div className='container mb-5'>
        <h1 className='text-center py-5'>Welcome to Admin Page</h1>
      </div>
      <div className='py-5 container'>
        <h4 className='py-5 '>Make an Admin</h4>
        <form style={{ width: '400px' }} onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Airport Id</label>
            <input
              type='text'
              className='form-control'
              name='airport_id'
              placeholder='Enter Airport Id'
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>User Id</label>
            <input
              className='form-control'
              name='user_id'
              placeholder='Enter User Id'
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Admin's location</label>
            <input
              className='form-control'
              name='admin_location'
              placeholder='Enter Admin location'
              onChange={handleChange}
            />
          </div>

          <button type='submit' className='btn btn-danger'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default AdminPage;
