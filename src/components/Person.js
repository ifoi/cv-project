// Person.js    

import React from 'react';


function Person(props) {


    return ( <div>    <h3> Personal Information </h3>
        <label htmlFor="firsName"  > First Name: </label> 
        <input type="text" 
               name="firstName"
              
               id="FirstName"
               value={props.personalInfo.FirstName}
               onChange={props.handleChange}
               placeholder="Enter First name"/> 

    <label htmlFor="LastName"    >Last Name: </label> 
        <input type="text" 
               name="LastName"
              
               id="LastName"
               value={props.personalInfo.LastName}
               onChange={props.handleChange}
               placeholder="Enter your Last Name"/>                
        
        <label htmlFor="email" > email: </label> 
        <input type="email"  id="email" name="email"
            value={props.personalInfo.email}
            onChange={props.handleChange}
            placeholder="Enter email"/> 

       <label htmlFor="phone" > phone: </label> 
       <input type="tel"  id="phone" name="phone" value={props.personalInfo.phone} onChange={props.handleChange} placeholder="Enter phone"/> 
  
    </div>
     );
}


export default Person ;