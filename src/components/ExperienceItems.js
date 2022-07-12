import React from 'react' ;

const ExperienceItems = (props) => {


  const createExperience= (experience) => {

       
        return (
     
                    // let numberOfExperiences = props.experience.length;
        <li key={experience.key}>
        <>
               <label htmlFor="companyName"  > CompanyName: </label>     
              <input type="text" id={experience.key} name="companyName"
               placeholder="Enter name of the company "
               value={experience.companyName}
               onChange={(event) =>props.handleChange(event, props.key)}
              
               />
        
              <label htmlFor="title"  > Job Title:</label>     
              <input type="text" id="title" name="title" placeholder="Enter job title at the company "  onChange={props.handleChange} required />
        
              <label htmlFor="dateFrom"  > From:</label>     
              <input type="date" id="dateFrom" name="dateFrom"  onChange={props.handleChange} required />
        
              <label htmlFor="dateUntil"  > Until:</label>     
              <input type="date" id="dateUntil" name="dateUntil"   onChange={props.handleChange} required/>
        
               <label htmlFor="title"  > Main duties:</label>     
              <textarea type="text" id="title" name="title" placeholder="Enter a description of your duties "  onChange={props.handleChange} /> 
              
              
            <div>  <button className="btn-primary" onClick={props.addExperience}> Add</button> 
        
              <button type="submit" > Reset/Clear info</button>   </div>      
              
            </>
            </li>
        )

         }; //end of createExperience

    

    const experiences = props.experience.map(createExperience);

    return (
        <ul className="experiences">
 
            {experiences}
        </ul>
    );
}



export default ExperienceItems;