
import './App.css';
import {useState} from "react" ;
import produce from "immer" ;
import {v4 as uuidv4} from "uuid";
import Person from './components/Person';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
 
  const uniqueId = uuidv4() ;

  const [state, setState] = useState({
    personalInfo: {
      firstName: '' ,
      lastName: '',
      email: '',
      phone: '' ,
     
    },

    education : [
       {
        id: '',
        schoolName: '' ,
        titleOfStudy: '' ,
        dateOfStudy: '',
        key: uniqueId , 
      },
    ],
      experience :[
        {
        companyName: '' ,
        title: '' ,
        dateFrom: '' ,
        dateUntil: '' ,
        key: uniqueId ,
        }
  ],
  })

   
  function handleChange(event) {
    const value = event.target.value;
    setState((prevState) => ( { 
        ...prevState,
        personalInfo:{
          ...prevState.personalInfo, 
          [event.target.name]: value 
         },
        
    }));
}  
 
function handleEducationChange(event) {
  const value = event.target.value;
  
  setState(
    produce (draftState => {
      draftState.education[0][event.target.name] = value;  
      })        
      )
}

 const handleExperienceChange =(event) => {
    const value = event.target.value;
    setState(
      produce (draftState => {
        draftState.experience[0][event.target.name] = value;  
        })        
        )
  }

// const getFormData = (event) => {
//   event.target.form
// }

 //Add Experience and Education to objects in state object

 const addExperience = (event) => {
    event.preventDefault();
   console.log(event.target) ;

   const newExperience = {
    companyName: 'event.target.value.companyName' ,
    title: "event.target.value.title" ,
    dateFrom: "event.target.value.dateFrom" ,
    dateUntil: "event.target.value.dateUntil" ,  
}

   setState(produce (draftState => {
    draftState.experience.push(newExperience)
    }))
 }

  return (
    <div className="App">
      <Header />
      
      <form>

      <Person personalInfo={state.personalInfo} handleChange={handleChange} />

      <Education education={state.education}
                 handleChange={handleEducationChange}
                  />
      
       <Experience experience={state.experience}
          handleChange={handleExperienceChange} 
          addExperience = {addExperience} /> 
      
       </form>
      <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
     <Footer personalInfo = {state.personalInfo }
          experience={state.experience}
          education={state.education}
       />   
    </div>
  );
}

export default App;
