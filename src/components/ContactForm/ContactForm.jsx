import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/contactSlice';

import {
  BtnAdd,
  ErrorMess,
  FormStyle,
  Input,
  Label,
} from './ContactForm.styled';



const SingupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number format 000-00-00')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts)
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SingupSchema}
      onSubmit={(values, actions) => {
       const isContacts = contacts.some(contact=>contact.name.toLowerCase().includes(values.name.toLowerCase()));  if (isContacts) {
        alert(`${values.name} alredy in contacts`);
        actions.resetForm();
        return;
      }
      dispatch(addContact(values));

        actions.resetForm();
      }}
    >
      <FormStyle>
        <Label>
          Name
          <Input type="text" name="name" />
          <ErrorMess name="name" component="div" />
        </Label>

        <Label>
          Number
          <Input type="tel" name="number" />
          <ErrorMess name="number" component="div" />
        </Label>

        <BtnAdd type="submit">Add contact</BtnAdd>
      </FormStyle>
    </Formik>
  );
};