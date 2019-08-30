import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../actions/getProfile';

const Profile = props => {
  const [profiles, setProfiles] = useState('');

  useEffect(() => {
    props.getProfile();
    setProfiles(props.profile);
  }, []);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    profile: state.getProfile.profile
  };
};

export default connect(
  mapStateToProps,
  { getProfile }
)(Profile);
