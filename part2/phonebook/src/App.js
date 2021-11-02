import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    if (
      persons.some(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      setNewName('');
      return alert(`${newName} is already added to phonebook`);
    }

    const personObject = {
      name: newName,
    };
    setPersons(persons.concat(personObject));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleInputSubmit}>
        <div>
          Name: <input onChange={handleInputChange} value={newName} required />
        </div>
        <br />
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
