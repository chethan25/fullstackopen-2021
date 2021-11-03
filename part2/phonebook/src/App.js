import React, { useState } from 'react';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    if (
      persons.some(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      setNewName('');
      setNewNumber('');
      return alert(`${newName} is already added to phonebook`);
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  };

  const handleSearchInput = (event) => {
    setSearchFilter(event.target.value);
    const regex = new RegExp(searchFilter, 'gi');
    const filteredPersons = () =>
      persons.filter((person) => person.name.match(regex));
    setPersons(filteredPersons);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        handleSearchInput={handleSearchInput}
        searchFilter={searchFilter}
      />
      <h3>Add New Contact</h3>
      <PersonForm
        handleInputSubmit={handleInputSubmit}
        handleNameChange={handleNameChange}
        newName={newName}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
      />
      <h2>Your Contacts</h2>
      <Contacts persons={persons} />
    </div>
  );
};

export default App;
