import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "10% auto"
  },
  media: {
    height: 140
  },
  avatar: {
    backgroundColor: red[500],
    margin: "10px auto",
    width: "50px",
    height: "50px",
    fontSize: "15px"
  }
});

const Title = styled.h2`
  text-align: center;
  color: green;
  margin-top: 10px;
  font-weight: 300;
`;

const UserCard = props => {
  const classes = useStyles();
  return (
    <div>
      <Title>Welcome to your profile {props.users.firstname} !</Title>
      <Card className={classes.card}>
        <CardActionArea>
          {
            <Avatar aria-label="recipe" className={classes.avatar}>
              USER
            </Avatar>
          }
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Name: {props.users.firstname} {props.users.lastname}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Contact: {props.users.contact}
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary" component="p">
              Username: {props.users.username}
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary" component="p">
              image: {props.users.image_url}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/profile/new">
            <Button size="small" color="primary">
              Home
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default UserCard;
// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';

// const GetFlights = props => {
//   return (
//     <div>
//       {props.flights
//         ? props.flights.map(flight => {
//             return { flight };
//           })
//         : false}
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     flights: state.getFlightReducer.flights
//   };
// };

// export default connect(
//   mapStateToProps,
//   {}
// )(GetFlights);
