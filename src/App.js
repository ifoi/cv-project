
import './App.css';
import {useState} from "react" ;
import produce from "immer" ;
import {v4 as uuidv4} from "uuid";
import Person from './components/Person';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import {useImmer} from "use-immer";



function App() {
 
//  const uniqueId = uuidv4() ;

const [personalInfo, setPersonalInfo] = useImmer({

    firstName: '' ,
    lastName: '',
    email: '',
    phone: '' ,
    
  }) ;

const [experience, setExperience]= useImmer([{
  companyName: '' ,
  title: '' ,
  dateFrom: '' ,
  dateUntil: '' ,
  key:uuidv4() ,
    },
  ]
 ); 


// const [Education, setEducation]= useImmer([{
//         id: '',
//         schoolName: '' ,
//         titleOfStudy: '' ,
//         dateOfStudy: '',
//         key: uuidv4() , 
//           } ,
//         ] 

//     ); 



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
        key: uuidv4() , 
      },
    ],
      experience :[
        {
        companyName: '' ,
        title: '' ,
        dateFrom: '' ,
        dateUntil: '' ,
        key:uuidv4() ,
        }
  ],
  })

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name ;
    setPersonalInfo(draft => {  
          draft[name] = value ;
         });
        
   };


function handleEducationChange(event) {
  const value = event.target.value;
  
  setState(
    produce (draftState => {
      draftState.education[0][event.target.name] = value;  
      })        
      )
}

//  Get key of item and watch state
 const handleExperienceChange =(event, key) => {
    const value = event.target.value;
    const index = experience.map(experience=>  experience.key).indexOf(event.target.id) ;

    // console.log("index of:" + index + " key:" + experience[0].key + " value:" + value +" target id:" + event.target.id)

      setExperience(draftState => {
          draftState[index][event.target.name] = value;  
      });        
        
  }



 //Add Experience and Education to objects in state object

 const addExperience = (event) => {
    event.preventDefault();

    const newExperience = {
      companyName: '' ,
      title: "" ,
      dateFrom: "" ,
      dateUntil: "" ,
      key: uuidv4() ,  
      }

      setExperience(draftState => {
      draftState.push(newExperience)
      })
  }


  const delExperience = (event, id) => {
    event.preventDefault();
    // const index = experience.map(experience=>  experience.key).indexOf(event.target.id) ;
    const index = experience.map(experience=>  experience.key).indexOf(id) ;

    console.log("index :" + index + " target :" + event.target.id + " key :" + experience.key) ;

      setExperience(draftState => {
        if (index > -1) {
        draftState.splice(index, 1);
        }
      })
  }

  

  return (
    <div className="App">
      <Header />
      
      <Person personalInfo={personalInfo} handleChange={handleChange} />

      <Education education={state.education}
                 handleChange={handleEducationChange}
                //  key={state.education.key}
                  />
      
       {/* <Experience experience={state.experience}
          handleChange={handleExperienceChange} 
          addExperience = {addExperience} 
          key = {state.experience.key}/>  */}

       <Experience experience={experience}
          handleChange={handleExperienceChange} 
          addExperience = {addExperience} 
          key = {experience.key}
          delExperience={delExperience}/> 
          
      
     
     
        
     <Footer 
          personalInfo = {personalInfo }
          experience={state.experience}
          education={state.education}
       />   
    </div>
  );
}

export default App;
