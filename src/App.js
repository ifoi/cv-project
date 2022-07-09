
import './App.css';
import {useState} from "react" ;
import Person from './components/Person';
import Experience from './components/Experience';
import Education from './components/Education';


function App() {

  const [state, setState] = useState({
    name: '' ,
    email: '',
    phone: '' ,
    schoolName: '' ,
    titleOfStudy: '' ,
    dateOfStudy: '',
    companyName: '' ,
    title: '' ,
    dateFrom: '' ,
    dateUntil: '' ,
  })

   
  function handleChange(event) {
    const value = event.target.value;
    setState({ 
        ...state,
        [event.target.name]: value
    });
}  
 

  return (
    <div className="App">
      {/* <header /> */}
      <form>

      <Person name={state.name} email={state.email} phone={state.phone} handleChange={handleChange} />

      <Education schoolName={state.schoolName}
           titleOfStudy={state.titleOfStudy} 
           dateOfStudy={state.dateOfStudy}
           handleChange={handleChange} />
      
       <Experience companyName ={state.companyName}
          title ={state.title}
          dateFrom={state.dateFrom}
          dateUntil={state.dateUntil}
          handleChange={handleChange} /> 
      
       </form>
      <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
    </div>
  );
}

export default App;
