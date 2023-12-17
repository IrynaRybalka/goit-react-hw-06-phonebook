import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filters } from './Filters/Filters';

import { Wrapper } from './App.styled';

const getContacts = () => {
  const saveContact = localStorage.getItem('contact-list');
  if (saveContact !== null) {
    return JSON.parse(saveContact);
  } else {
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getContacts);
  const [filters, setFilters] = useState('');

  useEffect(() => {
    localStorage.setItem('contact-list', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isContact = contacts.some(contact =>
      contact.name.toLowerCase().includes(newContact.name.toLowerCase())
    );
    if (isContact) {
      alert(`${newContact.name} alredy in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
  };

  const onChangeFilter = value => {
    setFilters(value);
  };

  const getVisibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
    console.log(deleteContact);
  };

  return (
    <Wrapper>
      <h2>Phonebook</h2>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filters onChangeFilter={onChangeFilter} />
      <ContactList contacts={getVisibleContact} onDelete={deleteContact} />
    </Wrapper>
  );
};
