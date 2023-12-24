

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filters } from './Filters/Filters';

import { Wrapper } from './App.styled';



export const App = () => {
  
  return (
    <Wrapper>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filters />
      <ContactList/>
    </Wrapper>
  );
};
