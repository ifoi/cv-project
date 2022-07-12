// Person.js    

import React from 'react';


function Person(props) {


    return (  <form> <div className="mb-3 row" > 
          <h3> Personal Information </h3>
        <label htmlFor="firsName"  className="col-sm-2 col-form-label-lg" > First Name: </label> 
        <input type="text" 
               name="firstName"
               className="col-sm-10 col-form-control "
               id="FirstName"
               value={props.personalInfo.FirstName}
               onChange={props.handleChange}
               placeholder="Enter First name"/> 

    <label htmlFor="LastName" className="col-sm-2 col-form-label-lg">Last Name: </label> 
        <input type="text" 
               name="LastName"
               className="col-sm-10 col-form-control"
               id="LastName"
               value={props.personalInfo.LastName}
               onChange={props.handleChange}
               placeholder="Enter your Last Name"/>                
        
        <label htmlFor="email" className="col-sm-2 col-form-label-lg" > email: </label> 
        <input type="email"  id="email" name="email" className="col-sm-10 col-form-control"
            value={props.personalInfo.email}
            onChange={props.handleChange}
            placeholder="Enter email"/> 

       <label htmlFor="phone" className="col-sm-2 col-form-label-lg"> phone: </label> 
       <input type="tel"  id="phone" name="phone" className="col-sm-10 col-form-control" value={props.personalInfo.phone} onChange={props.handleChange} placeholder="Enter phone"/> 
    
      <div>  <button className="btn-primary" > Save</button> 
        <button type="submit" > Reset/Clear info</button>   </div> 
    </div>  </form>
     );
}


export default Person ;