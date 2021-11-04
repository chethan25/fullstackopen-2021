import React, { useEffect, useState } from 'react';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import contactService from './services/contacts';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    contactService
      .getAll()
      .then((initialContacts) => setPersons(initialContacts));
  }, []);

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

    contactService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName('');
      setNewNumber('');
    });
  };

  const handleSearchInput = (event) => {
    setSearchFilter(event.target.value);
    const regex = new RegExp(searchFilter, 'gi');
    const filteredPersons = () =>
      persons.filter((person) => person.name.match(regex));
    setPersons(filteredPersons);
  };

  const handleDeletePerson = (person) => {
    const result = window.confirm(`Delete ${person.name}`);
    if (result) {
      contactService.remove(person.id);
      setPersons(persons.filter((p) => p.id !== person.id));
    }
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
      <ul>
        {persons.map((person) => (
          <Contacts
            key={person.id}
            person={person}
            onBtnClick={() => handleDeletePerson(person)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
