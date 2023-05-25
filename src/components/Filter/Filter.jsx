import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterBox, Label, Input } from './Filter.styled';

export default function Filter({ value, onChange }) {
  const filterInputId = nanoid();
  return (
    <FilterBox>
      <Label htmlFor={filterInputId}>Find contact by name</Label>
      <Input
        value={value}
        onChange={onChange}
        id={filterInputId}
        type="text"
        name="filter"
        required
      />
    </FilterBox>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
