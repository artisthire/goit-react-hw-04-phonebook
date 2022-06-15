import PropTypes from 'prop-types';
import { Item, Number, Button } from './ContactListItem.styled';

function ContactListItem({ name, number, onContactRemove }) {
  return (
    <Item>
      {name}: <Number>{number}</Number>{' '}
      <Button type="button" onClick={onContactRemove}>
        Delete
      </Button>
    </Item>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onContactRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
