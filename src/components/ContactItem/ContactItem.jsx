import { useDispatch } from 'react-redux';
import { BtnDelete, WrapperItem } from './ContactItem.styled';
import { deleteContact } from 'store/contactSlice';

export const ContactItem = ({ name, number, id}) => {
  const dispatch = useDispatch();
  return (
    <WrapperItem>
      <p>
        {name}: {number}
      </p>
      <BtnDelete onClick={() => dispatch(deleteContact(id))}>Delete</BtnDelete>
    </WrapperItem>
  );
};
