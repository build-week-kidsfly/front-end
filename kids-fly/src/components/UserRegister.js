import { withFormik, Form, Field } from "formik";
import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import axios from "axios";
import cutekidairplane  from  "./cutekidairplane.jpg";
import data from '/Users/nadiachilds/Desktop/front-end/kids-fly/src/components/data.js';
import '../App.css';


const UserRegister = ({ errors, touched, values, status }) => {
   const [state, setState] = useState([]);
 
   return (
       <div>
           <h1> New User </h1>
<img className ="cutekid" src={cutekidairplane} alt="workplz"></img>
           <br />
           <Form>   Username:
               <Field
                   className="field"
                   component="input"
                   type="text"
                   name="username"
                   placeholder="Username"
               />
               {touched.username && errors.username && (
                   <p className="error">{errors.username}</p>
               )}
               <br /> <br />Password:
               <Field
                   className="field"
                   component="input"
                   type="password"
                   name="password"
                   placeholder="Password"
               />
               {touched.password && errors.password && (
                   <p className="error">{errors.password}</p>
               )}
               <br />  <br /> First name:
               <Field
                   className="field"
                   component="input"
                   type="FirstN"
                   name="first_name"
                   placeholder="First name"
               />
               {touched.firstN && errors.firstN && (
                   <p className="error">{errors.firstN}</p>
               )}
              <br/> <br/> Last name:
              <Field className="field"
              component="input"
              type="LastN"
              name="last_name"
              placeholder="Last name"
              />
              {touched.LastN && errors.lastN && (
                  <p className="error">{errors.lastN}</p>
              )}
              <br/><br/>
              <Field className="field"
              component="input"
              type="email"
              name="email@ddress"
              placeholder="example@gmail.com"
              />
              {touched.LastN && errors.lastN && (
                  <p className="error">{errors.lastN}</p>
              )}
              <br/><br/>
              <Field className="phone"
              component="input"
              type="#"
              name="phone#"
              placeholder="Phone number"
              />
              {touched.LastN && errors.lastN && (
                  <p className="error">{errors.lastN}</p>
              )}
              <br/><br/>
               <button
                   type="submit"
               >
                   Create Account
               </button>
               <hr />
           </Form>
           {status && status.username && (
               <div>
                   <br />
                   <h1>Welcome, {status.username}</h1>
                
           
                       
                 
               </div>
           )}
       </div>
   )
}

const formikHOC = withFormik({
   mapPropsToValues({ username, password}) {
       return {
      
           username: username || "",
           password: password || "",
          
       };
       
   },
   validationSchema: Yup.object().shape({
       username: Yup.string()
           .required("Username required"),
       password: Yup.string()
           .required("Password required"),
   
           
   }),
handleSubmit(values, { setStatus, resetForm }) {
       setStatus(values);
   }
});
const UserFormWithFormik = formikHOC(UserRegister);
export default UserFormWithFormik;
