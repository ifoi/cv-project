import React from 'react' ;


const Footer =(props) => {

   return ( <div className="bg-dark text-white">
    
        <p>  This is the resume of {props.personalInfo.firstName}  </p>
        <p> Worked at { props.experience[0] && props.experience[0].companyName} </p> 
        <p> Studied at {props.education[0] && props.education[0].schoolName} </p>
    </div> )


};




export default Footer ;