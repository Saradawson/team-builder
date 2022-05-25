import React, { useState } from 'react';
import MemberForm from './components/Form';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  
  const [values, setValues] = useState({name: '', email: '', role: ''});

  const onChange = (inputName, inputValue) => {
    setValues({ ...values, [inputName]: inputValue })
  }

  const submitForm = () => {
    setTeamMembers([values, ...teamMembers]);
    setValues({name: '', email: '', role: ''});
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <MemberForm 
        values={values}
        update={onChange}
        submit={submitForm}
      />
      {teamMembers.map((member, idx) => {
        return (
          <div key={idx}>
            {member.name}, {member.email}, {member.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;
