import React, {useState} from "react";
import Demo from "./components/Demo";
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  // creating a new state
  const [currForm, setCurrForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrForm(formName);
  }
  return (
      <div className="App">
        {/* ternary operator: checks if login true else go to register */
          currForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register />
        }
        
      </div>
  );
}

export default App;
