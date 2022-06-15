import PropTypes from 'prop-types';
import { Label, LabelName, Input } from './Filter.styled';

function Filter({ filterValue, onFilterChange }) {
  return (
    <Label>
      <LabelName>Find contact by name</LabelName>
      <Input
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilterChange}
      />
    </Label>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
