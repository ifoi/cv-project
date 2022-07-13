//Experience.js 

import React from 'react';
import ExperienceItems from './ExperienceItems'

function Experience(props) {

  
  // map through Experiences

  return( 
    <div> <h3> Experience</h3>
{/*         
        <label htmlFor="companyName"  > CompanyName:</label>     
        <input type="text" id="companyName" name="companyName" placeholder="Enter name of the company "  onChange={props.handleChange} />

        <label htmlFor="title"  > Job Title:</label>     
        <input type="text" id="title" name="title" placeholder="Enter job title at the company "  onChange={props.handleChange} />

        <label htmlFor="dateFrom"  > From:</label>     
        <input type="date" id="dateFrom" name="dateFrom"  onChange={props.handleChange} />

        <label htmlFor="dateUntil"  > Until:</label>     
        <input type="date" id="dateUntil" name="dateUntil"   onChange={props.handleChange} />

         <label htmlFor="title"  > Main duties:</label>     
        <textarea type="text" id="title" name="title" placeholder="Enter a description of your duties "  onChange={props.handleChange} /> 
        
        
      <div>  <button className="btn-primary" onClick={props.addExperience}> Save</button> 

        <button type="submit" > Reset/Clear info</button>   </div> 
       */}

    <ExperienceItems
            experience={props.experience} 
            key={props.key} 
            handleChange={props.handleChange}
            addExperience ={props.addExperience} 
            delExperience = {props.delExperience}/>
        </div>

    ) ;
}





export default Experience ;
