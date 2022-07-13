import React from 'react' ;

const ExperienceItems = (props) => {


  const createExperience= (experience) => {

       
        return (
     
                    
        <li key={experience.key}  className="input-group mb-3 row"  >
        <>
               <label htmlFor="companyName" className="col-sm-2 col-form-label-lg" > CompanyName: </label>     
              <input className="col-sm-10 col-form-control " type="text" id={experience.key} name="companyName"
               placeholder="Enter name of the company "
               value={experience.companyName}
               onChange={(event) =>props.handleChange(event, experience.key)}
              
               required />
        
              <label htmlFor="title"  > Job Title:</label>     
              <input className="col-sm-10 col-form-control " type="text" id={experience.key} name="title" placeholder="Enter job title at the company "   onChange={(event) =>props.handleChange(event, experience.key)}required />
        
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
        <ul className="experiences mb-3 row">
 
            {experiences}

          <button className="btn-primary" onClick={(event) =>props.addExperience(event)}> Add Experience</button> 
        </ul>
        
    );
}



export default ExperienceItems;