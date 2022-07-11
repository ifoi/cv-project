//Education.js

import React from 'react';

function Education(props){


    return (
    
    <div> <h3> Education</h3>
        <label htmlFor="schoolName"  > schoolName:</label>     
        <input type="text" id="schoolName" name="schoolName" placeholder="Enter name of the School "  onChange={props.handleChange} />
        
        <label htmlFor="titleOfStudy"  > Degree:</label>     
        <input type="text" id="titleOfStudy" name="titleOfStudy" placeholder="Enter name of the Degree "  onChange={props.handleChange} />

        <label htmlFor="dateOfStudy"  > From:</label>     
        <input type="date" id="dateOfStudy" name="dateOfStudy" placeholder="Enter date of study "  onChange={props.handleChange} />
        
        <label htmlFor="endOfStudy"  > To:</label>     
        <input type="date" id="endOfStudy" name="endOfStudy"   onChange={props.handleChange} />
    </div> 
    
      
    
    ) ;
}




export default Education ;