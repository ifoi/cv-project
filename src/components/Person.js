// Person.js    

import React from 'react';


function Person(props) {


    return ( <div> 
        <label htmlFor="firsName"  htmlFor="firsName"  > Name: </label> 
        <input type="text" 
               name="firstName"
              
               id="FirstName"
               value={props.FirstName}
               onChange={props.handleChange}
               placeholder="Enter First name"/> 

    <label htmlFor="LastName"  htmlFor="LastName"  > Name: </label> 
        <input type="text" 
               name="LastName"
              
               id="LastName"
               value={props.LastName}
               onChange={props.handleChange}
               placeholder="Enter your Last Name"/>                
        
        <label htmlFor="email" > email: </label> 
        <input type="email"  id="email" name="email"
            value={props.email}
            onChange={props.handleChange}
            placeholder="Enter email"/> 

       <label htmlFor="phone" > phone: </label> 
       <input type="tel"  id="phone" name="phone" value={props.phone} onChange={props.handleChange} placeholder="Enter phone"/> 
  
    </div>
     );
}


export default Person ;