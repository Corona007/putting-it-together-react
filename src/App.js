import React from 'react';
import './App.css';

import PutComp from './components/PutComp';

function App() {
  return (
    <div className="App">
      <PutComp firstName={" Jane"} lastName={"Doe"} Age={"Age: 45"} hairColor={"Hair Color: Black"}/>

      <PutComp firstName={" John"} lastName={"Smith"} Age={"Age: 88"} hairColor={"Hair Color: Brown"}/>

      <PutComp firstName={" Millard"} lastName={"Fillmore"} Age={"Age: 50"} hairColor={"Hair Color: Brown"}/>

      <PutComp firstName={" Maria"} lastName={"Smith"} Age={"Age: 62"} hairColor={"Hair Color: Brown"}/>
    </div>
  );
}

export default App;
