//Education.js

import React from 'react';

function Education(props){

  const createEducationList = (education) => {
    return (
       
    <li key={education.key}  className="input-group mb-3 row"  > 
    <>
        <label htmlFor="schoolName"  > schoolName:</label>     
        <input type="text" id={education.key} name="schoolName" placeholder="Enter name of the School "  onChange={(event) =>props.handleChange(event)} />
        
        <label htmlFor="titleOfStudy"  > Degree:</label>     
        <input type="text" id={props.education.key} name="titleOfStudy" placeholder="Enter name of the Degree "  onChange={(event) =>props.handleChange(event, props.education.key)} />

        <label htmlFor="dateOfStudy"  > From:</label>     
        <input type="date" id={props.education.key} name="dateOfStudy" placeholder="Enter date of study "  onChange={(event) =>props.handleChange(event,props.education.key)} />
        
        <label htmlFor="endOfStudy"  > To:</label>     
        <input type="date" id={props.education.key} name="endOfStudy"   onChange={(event) =>props.handleChange(event, props.education.key)} />

        <button className="btn-primary" onClick={(event) =>props.delEducation(event, education.key)}> Delete Education</button>
   </>

    </li> 
    
    )
  } ; // end of createEducationList

      const educationList =  props.education.map(createEducationList) ; 

    return ( 
       <div>
        <h3> Education </h3>
         <ul>
           
            {educationList}

         </ul>
      
         <button className="btn-primary" onClick={(event) =>props.addEducation(event)}> Add Education Experience</button> 
         </div>
        );
}




export default Education ;