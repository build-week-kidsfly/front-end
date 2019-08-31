import { withFormik, Form, Field } from "formik";
import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import cutekidairplane  from  "./cutekidairplane.jpg";
import { Link } from 'react-router-dom';
import '../App.css';
//<img className ="cutekid" src={cutekidairplane} alt="child-in-front-airplane"></img>

const ScheduleNew = ({ errors, touched, values, status }) => {
   const [state, setState] = useState([]);
 
   return (
       <div>
           <div className="navbar">
               <nav> KidsFly</nav> <span id="menu-items"><nav className="nav2">Home </nav> <nav className="nav2">Profiles</nav> <nav className="nav2">Request Form</nav> <nav className="nav2">Admin</nav> <nav className="nav2">Logout </nav> </span>
           </div>
           <h1> Your Next Adventure</h1>
<p id="bonvoyage">Where are we headed? Just fill us in on some details about your next adventure and we'll do the rest. </p>
           <br />
           <Form>
           <p>Airport:<br /></p>
          <Field 
                   className="field"
                   component="input"
                   type="text"
                   name="airport"
                   placeholder="Airport..."
               />
               {touched.airport && errors.airport && (
                   <p className="error">{errors.airport}</p>
               )}
               
               <p>Destination: </p> 
               <Field
                   className="field"
                   component="input"
                   type="to"
                   name="to"
                   placeholder="Destination..."
               />
               {touched.to && errors.to && (
                   <p className="error">{errors.to}</p>
               )}
              
             <p>Number of children traveling: </p> 
               <Field
                   className="field"
                   component="input"
                   type="question"
                   name="kiddos"
                   placeholder="Number of kids..."
               />
               {touched.kiddos && errors.kiddos && (
                   <p className="error">{errors.kiddos}</p>
               )}
              <p> Email Address: </p>
              <Field className="field"
              component="input"
              type="contact-info"
              name="email"
              placeholder="Email..."
              />
              {touched.email && errors.email && (
                  <p className="error">{errors.email}</p>
              )}
            
             <p> Phone number: </p>
              <Field className="field"
              component="input"
              type="number"
              name="phone"
              placeholder="1-(555)-555-5555"
              />
              {touched.phone && errors.phone && (
                  <p className="error">{errors.phone}</p>
              )}
             
              <p> Departure Time: </p>
              <Field className="field"
              component="input"
              type="time"
              name="dept"
               />
              {touched.dept && errors.dept && (
                  <p className="error">{errors.dept}</p>
              )}
                <br/>
                <br/>
               <Link to="/GetUser"><button id="custom-btn"
                   type="submit" onClick={(e) => { if (window.alert('Bon Voyage! Your account will be updated with your newly added trip information within 24 hours')) this.deleteItem(e) } }>
               
                   Submit
               </button> </Link>
             
           </Form>
           {status && status.username && (
               <div>
                
                  
                    </div>
           )}
       </div>
   )
}
const formikHOC = withFormik({
   mapPropsToValues({ username, password,airport,to,email,phone,dept}) {
       return {
           username: username || "",
           password: password || "",
           airport: airport   || "",
           to:       to       ||"",
           email: email       || "",
           phone: phone       || "",
           dept: dept         || "",
           

       };
   },
   validationSchema: Yup.object().shape({
       username: Yup.string()
           .required("Username required"),
       password: Yup.string()
           .required("Password required"),
   
           
   }),
handleSubmit(values) {
       
    

   }
});
const UserFormWithFormik = formikHOC(ScheduleNew);
export default UserFormWithFormik;

