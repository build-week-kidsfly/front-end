import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import { Container } from 'reactstrap';
import { Route, Link, Switch } from 'react-router-dom';
import UserCard from './UserCard';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const ProfileContainer = props => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  return (
    <div>
      <div className={classes.root}>
        <AppBar position='static' style={{ backgroundColor: '#047503' }}>
          <Toolbar>
            <Typography variant='h5' style={{ color: 'blue' }}>
              KidsFly
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Container>
        <Switch>
          <Route
            exact
            path='/profile/new'
            render={props => (
              <ProfileForm {...props} users={users} setUsers={setUsers} />
            )}
          />
          <Route
            exact
            path={`/profile/:id`}
            render={props => <UserCard {...props} users={users} />}
          />

          <Link to='/profile/new'>Home</Link>
        </Switch>
      </Container>
    </div>
  );
};

export default ProfileContainer;
