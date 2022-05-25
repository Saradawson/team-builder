import React, { useState } from 'react';
import MemberForm from './components/Form';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  
  const [values, setValues] = useState({name: '', email: '', role: ''});

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <MemberForm 
      />
    </div>
  );
}

export default App;
