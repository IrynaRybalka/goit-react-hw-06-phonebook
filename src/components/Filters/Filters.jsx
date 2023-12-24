import { useDispatch } from 'react-redux';
import { Input } from './Filters.styled';
import { changeFilter } from 'store/filterSlice';



export const Filters = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Find number by name:
      <Input type="text" onChange={evt => dispatch(changeFilter(evt.target.value))} />
    </div>
  );
};
