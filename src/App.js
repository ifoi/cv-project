
import './App.css';
import Person from './components/Person';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      {/* <header /> */}
      
      <Person  />

      <Education />
      
       <Experience /> 
      
      <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
    </div>
  );
}

export default App;
