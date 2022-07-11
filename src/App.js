
import './App.css';
import {useState} from "react" ;
import Person from './components/Person';
import Experience from './components/Experience';
import Education from './components/Education';


function App() {

  const [state, setState] = useState({
    personalInfo: {
      firstName: '' ,
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
  setState((prevState) => ( { 
      ...prevState,
      education:{
        ...prevState.education, 
        [event.target.name]: value 
       },
      
  }));
} 

  return (
    <div className="App">
      {/* <header /> */}
      <form>

      <Person personalInfo={state.personalInfo} handleChange={handleChange} />

      <Education education={state.education}
                 handleChange={handleEducationChange} />
      
       <Experience experience={state.experience}
          handleChange={handleChange} /> 
      
       </form>
      <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
    </div>
  );
}

export default App;
