//Education.js

import React from 'react';

function Education(props){


    return (
    
    <div> <h3> Education</h3>
        <label htmlFor="schoolName"  > schoolName:</label>     
        <input type="text" id={props.education.key} name="schoolName" placeholder="Enter name of the School "  onChange={(event) =>props.handleChange(event, props.education.key)} />
        
        <label htmlFor="titleOfStudy"  > Degree:</label>     
        <input type="text" id={props.education.key} name="titleOfStudy" placeholder="Enter name of the Degree "  onChange={(event) =>props.handleChange(event, props.education.key)} />

        <label htmlFor="dateOfStudy"  > From:</label>     
        <input type="date" id={props.education.key} name="dateOfStudy" placeholder="Enter date of study "  onChange={(event) =>props.handleChange(event,props.education.key)} />
        
        <label htmlFor="endOfStudy"  > To:</label>     
        <input type="date" id={props.education.key} name="endOfStudy"   onChange={(event) =>props.handleChange(event, props.education.key)} />
    </div> 
    
      
    
    ) ;
}




export default Education ;