import { withFormik, Form, Field } from "formik";
import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import axios from "axios";
import cutekidairplane  from  "./cutekidairplane.jpg";
import data from '/Users/nadiachilds/Desktop/front-end/kids-fly/src/components/data.js';
import GetUser from '/Users/nadiachilds/Desktop/front-end/kids-fly/src/components/GetUser.js'
import '../App.css';

const registerFunc = (username,password,firstname,lastname,email,phone) => {
data.push(username,password,firstname,lastname,email,phone)
console.log(username,password,firstname,lastname,email,phone)
}

const UserRegister = ({ errors, touched, values, status }) => {
   const [state, setState] = useState([]);
 
   return (
       <div>
           <h1> New User </h1>
<img className ="cutekid" src={cutekidairplane} alt="smiling-chiild"></img>
           <br />
           <Form>   Username:<br />
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
               <br /> <br />Password: <br />
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
               <br />  <br /> First name:<br />
               <Field
                   className="field"
                   component="input"
                   type="text"
                   name="firstname"
                   placeholder="First name"
               />
               {touched.firstN && errors.firstN && (
                   <p className="error">{errors.firstN}</p>
               )}
              <br/> <br/> Last name: <br />
              <Field className="field"
              component="input"
              type="text"
              name="lastname"
              placeholder="Last name"
              />
              {touched.LastN && errors.lastN && (
                  <p className="error">{errors.lastN}</p>
              )}
              <br/><br/> Email: <br />
              <Field className="field"
              component="input"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              />
              {touched.LastN && errors.lastN && (
                  <p className="error">{errors.lastN}</p>
              )}
              <br/><br/> Phone: <br />
              <Field className="phone"
              component="input"
              type="number"
              name="phone"
              placeholder="ex:(555-555-5555)"
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
   mapPropsToValues({ username, password, email, firstname,lastname,phone}) {
       return {
      
           username: username || "",
           password: password || "",
           email: email       || "",
           first_name: firstname || "",
           last_name: lastname || "",
           phone: phone || "",
           
           
          


          
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
      registerFunc(values.username,values.password,values.firstname,values.lastname,values.email,values.phone)

   }
});
{}
const UserFormWithFormik = formikHOC(UserRegister);
export default UserFormWithFormik;
