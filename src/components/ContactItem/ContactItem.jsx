import { BtnDelete, WrapperItem } from './ContactItem.styled';

export const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <WrapperItem>
      <p>
        {name}: {number}
      </p>
      <BtnDelete onClick={() => onDelete(id)}>Delete</BtnDelete>
    </WrapperItem>
  );
};
