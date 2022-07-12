
import './App.css';
import {useState} from "react" ;
import produce from "immer" ;
import Person from './components/Person';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';



function App() {

  const [state, setState] = useState({
    personalInfo: {
      firstName: '' ,
      lastName: '',
      email: '',
      phone: '' 
    },

    education : [
       {
        schoolName: '' ,
        titleOfStudy: '' ,
        dateOfStudy: '' 
      },
    ],
      experience :[
        {
        companyName: '' ,
        title: '' ,
        dateFrom: '' ,
        dateUntil: ''  
    }, 
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

  return (
    <div className="App">
      {/* <header /> */}
      <form>

      <Person personalInfo={state.personalInfo} handleChange={handleChange} />

      <Education education={state.education}
                 handleChange={handleEducationChange} />
      
       <Experience experience={state.experience}
          handleChange={handleExperienceChange} /> 
      
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
