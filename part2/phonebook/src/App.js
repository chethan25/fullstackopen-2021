import React, { useEffect, useState } from 'react';
import './index.css';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import contactService from './services/contacts';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [successMessage, setSuccessMessage] = useState();

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

      const result = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (result) {
        const updatedPerson = persons.find((person) => {
          return person.name.toLowerCase() === newName.toLowerCase();
        });

        const updatedPersonObject = { ...updatedPerson, number: newNumber };

        return contactService
          .update(updatedPerson.id, updatedPersonObject)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== updatedPerson.id ? person : returnedPerson
              )
            );
            setSuccessMessage(`Updated ${newName}'s number`);
            setTimeout(() => {
              setSuccessMessage(null);
            }, 3000);
          });
      } else {
        return true;
      }
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    contactService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName('');
      setNewNumber('');
      setSuccessMessage(`Added ${newName} to your contact list`);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
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
      <Notification message={successMessage} />
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
