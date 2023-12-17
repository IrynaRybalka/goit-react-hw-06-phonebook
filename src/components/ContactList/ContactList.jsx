import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  // console.log('2');
  // console.log(contacts);
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <ContactItem
            name={name}
            number={number}
            id={id}
            onDelete={onDelete}
          />
        </li>
      ))}
    </List>
  );
};
