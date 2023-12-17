import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  width: 300px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 15px;
`;

export const Input = styled(Field)`
  border-radius: 4px;
  height: 25px;

  border-color: black;
`;

export const BtnAdd = styled.button`
  height: 35px;
  border-radius: 4px;
  border: none;
  width: 150px;
  background-color: lightblue;
  &:hover,
  &:focus {
    background-color: blue;
  }
`;
export const ErrorMess = styled(ErrorMessage)`
  color: red;
  font-size: 10px;
`;
