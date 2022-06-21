import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactListItem from 'components/ContactList/ContactListItem';

function ContactList({ contacts, onContactRemove }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onContactRemove={onContactRemove(id)}
        />
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onContactRemove: PropTypes.func.isRequired,
};

export default ContactList;
