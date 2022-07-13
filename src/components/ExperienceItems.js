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
               onChange={(event) =>props.handleChange(event, experience.key)}
              
               required />
        
              <label htmlFor="title"  > Job Title:</label>     
              <input type="text" id={experience.key} name="title" placeholder="Enter job title at the company "   onChange={(event) =>props.handleChange(event, experience.key)}required />
        
              <label htmlFor="dateFrom"  > From:</label>     
              <input type="date" id={experience.key} name="dateFrom"   onChange={(event) =>props.handleChange(event, experience.key)} required />
        
              <label htmlFor="dateUntil"  > Until:</label>     
              <input type="date" id={experience.key} name="dateUntil"    onChange={(event) =>props.handleChange(event, experience.key)} required/>
        
               <label htmlFor="title"  > Main duties:</label>     
              <textarea type="text" id={experience.key} name="title" placeholder="Enter a description of your duties "   onChange={(event) =>props.handleChange(event, experience.key)} /> 
              
              
            <div>
        
            <button className="btn-primary" onClick={(event) =>props.delExperience(event, experience.key)}> Delete</button> </div>      
              
            </>
            </li>
        )

         }; //end of createExperience

    

    const experiences = props.experience.map(createExperience);

    return (
        <ul className="experiences">
 
            {experiences}

          <button className="btn-primary" onClick={(event) =>props.addExperience(event)}> Add Experience</button> 
        </ul>
        
    );
}



export default ExperienceItems;