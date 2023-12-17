import styled from 'styled-components';

export const WrapperItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const BtnDelete = styled.button`
  width: 100px;
  height: 30px;
  background-color: lightblue;
  border-radius: 5px;
  border: none;
  &:hover,
  &:focus {
    background-color: blue;
  }
`;
