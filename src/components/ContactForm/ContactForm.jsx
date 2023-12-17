import { Formik } from 'formik';
import * as Yup from 'yup';
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

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SingupSchema}
      onSubmit={(values, actions) => {
        onAdd(values);

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
