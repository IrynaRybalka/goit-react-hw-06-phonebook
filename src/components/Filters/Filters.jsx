import { Input } from './Filters.styled';

export const Filters = ({ onChangeFilter }) => {
  return (
    <div>
      Find number by name:
      <Input type="text" onChange={evt => onChangeFilter(evt.target.value)} />
    </div>
  );
};
