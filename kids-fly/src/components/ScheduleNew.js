import { withFormik, Form, Field } from "formik";
import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import axios from "axios";
import cutekidairplane  from  "./cutekidairplane.jpg";
import '../App.css';

const ScheduleNew = ({ errors, touched, values, status }) => {
   const [state, setState] = useState([]);
 
   return (
       <div>
           <h1> Your Next Adventure</h1>
<img className ="cutekid" src={cutekidairplane} alt="child-in-front-airplane"></img>
<p id="bonvoyage">Where are we headed? Just fill us in on some details about your next adventure and we'll do the rest. </p>
           <br />
           <Form>
           Airport:<br />
          <Field 
                   className="field"
                   component="input"
                   type="text"
                   name="airport"
                   placeholder="airport"
               />
               {touched.airport && errors.airport && (
                   <p className="error">{errors.airport}</p>
               )}
               <br /> <br /> Destination:<br />
               <Field
                   className="field"
                   component="input"
                   type="to"
                   name="to"
                   placeholder="destination"
               />
               {touched.to && errors.to && (
                   <p className="error">{errors.to}</p>
               )}
               <br />  <br />
             Number of children traveling:<br />
               <Field
                   className="field"
                   component="input"
                   type="question"
                   name="kiddos"
                   placeholder="number of kids"
               />
               {touched.kiddos && errors.kiddos && (
                   <p className="error">{errors.kiddos}</p>
               )}
              <br/> <br/>Email Address:<br />
              <Field className="field"
              component="input"
              type="contact-info"
              name="email"
              placeholder="email"
              />
              {touched.email && errors.email && (
                  <p className="error">{errors.email}</p>
              )}
              <br/><br/>
              Phone number:<br />
              <Field className="field"
              component="input"
              type="number"
              name="phone"
              placeholder="ex:(555-555-5555)"
              />
              {touched.phone && errors.phone && (
                  <p className="error">{errors.phone}</p>
              )}
              <br/><br/>
               Departure Time:<br />
              <Field className="field"
              component="input"
              type="time"
              name="dept"
               />
              {touched.dept && errors.dept && (
                  <p className="error">{errors.dept}</p>
              )}
              <br/><br/>
               <button
                   type="submit"
               >
                   Submit
               </button>
               <hr />
           </Form>
           {status && status.username && (
               <div>
                   <br />
                   <h1>Welcome, {status.username}</h1>
           
                       )
                 
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

