
import './App.css';
// import {useState} from "react" ;
// import produce from "immer" ;
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


const [education, setEducation]= useImmer([{
        schoolName: '' ,
        titleOfStudy: '' ,
        dateOfStudy: '',
        endOfStudy: '' ,
        key: uuidv4() , 
          },
        ] 

    ); 



  // const [state, setState] = useState({
  //   personalInfo: {
  //     firstName: '' ,
  //     lastName: '',
  //     email: '',
  //     phone: '' ,
     
  //   },

  //   education : [
  //      {
  //       id: '',
  //       schoolName: '' ,
  //       titleOfStudy: '' ,
  //       dateOfStudy: '',
  //       key: uuidv4() , 
  //     },
  //   ],
  //     experience :[
  //       {
  //       companyName: '' ,
  //       title: '' ,
  //       dateFrom: '' ,
  //       dateUntil: '' ,
  //       key:uuidv4() ,
  //       }
  // ],
  // })

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name ;
    setPersonalInfo(draft => {  
          draft[name] = value ;
         });
        
   };


function handleEducationChange(event) {
  const value = event.target.value;
  const index = education.map(education => education.key).indexOf(event.target.id) ; 
 
  console.log("value:" +value + " index :" + index + " target :" + event.target.id + " key :" + education.key) ;

    
  setEducation( draftState =>{
    draftState[index][event.target.name] = value ;
  })
}

const addEducation = (event) => {
  event.preventDefault();

  const newEducation = {
    schoolName: '' ,
    titleOfStudy: '' ,
    dateOfStudy: '',
    endOfStudy: '' ,
    key: uuidv4() ,  
    }

    setEducation(draftState => {
    draftState.push(newEducation)
    })
}
function delEducation(event, id) {
   event.preventDefault() ;
  
  const index = education.map(education => education.key).indexOf(id) ; 
  
  if ( index > -1) {
     setEducation( draftState =>{
      draftState.splice(index, 1) ;
     });
  }
}



//  Get key of item and watch state
 const handleExperienceChange =(event) => {
    const value = event.target.value;
    const index = experience.map(experience=>  experience.key).indexOf(event.target.id) ;

    console.log("index of:" + index + " key:" + experience[0].key + " value:" + value +" target id:" + event.target.id)

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
    const index = experience.map(experience=>  experience.key).indexOf(id) ;

    // console.log("index :" + index + " target :" + event.target.id + " key :" + experience.key) ;
    
    if (index > -1) {
      setExperience(draftState => {
    
        draftState.splice(index, 1);
        }
      )  }
  }
 
   // Reset form 
   const resetForm =(event)=> {
    event.preventDefault() ;
  
    event.target.reset()
    
   }
  

  return (
    <div className="App">
      <Header />
      
      <Person personalInfo={personalInfo}
            resetForm={resetForm} handleChange={handleChange} />

      <Education education={education}
                 handleChange={handleEducationChange}
                addEducation ={addEducation}
                delEducation={delEducation}
                  />
   
       <Experience experience={experience}
          handleChange={handleExperienceChange} 
          addExperience = {addExperience} 
          // key = {experience.key}
          delExperience={delExperience}/> 
          
      
        
        
     <Footer 
          personalInfo = {personalInfo }
          experience={experience}
          education={education}
       />   
    </div>
  );
}

export default App;
