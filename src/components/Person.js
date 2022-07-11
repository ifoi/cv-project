// Person.js    

import React from 'react';


function Person(props) {


    return ( <div className="form-group" > 
          <h3> Personal Information </h3>
        <label htmlFor="firsName"  > First Name: </label> 
        <input type="text" 
               name="firstName"
               className="form-control"
               id="FirstName"
               value={props.personalInfo.FirstName}
               onChange={props.handleChange}
               placeholder="Enter First name"/> 

    <label htmlFor="LastName"    >Last Name: </label> 
        <input type="text" 
               name="LastName"
               className="form-control"
               id="LastName"
               value={props.personalInfo.LastName}
               onChange={props.handleChange}
               placeholder="Enter your Last Name"/>                
        
        <label htmlFor="email" > email: </label> 
        <input type="email"  id="email" name="email" className="form-control"
            value={props.personalInfo.email}
            onChange={props.handleChange}
            placeholder="Enter email"/> 

       <label htmlFor="phone" className="col-form-label"> phone: </label> 
       <input type="tel"  id="phone" name="phone" className="form-control" value={props.personalInfo.phone} onChange={props.handleChange} placeholder="Enter phone"/> 
  
    </div>
     );
}


export default Person ;