import { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, LabelName, Input, Button } from './ContactForm.styled';

function ContactForm({ onContactAdd }) {
  const [state, dispatch] = useReducer(reducer, {}, init);

  function handleChange({ target }) {
    const { name: type, value: payload } = target;

    dispatch({ type, payload });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onContactAdd({ name: state.name, number: state.number });
    dispatch({ type: 'reset' });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <LabelName>Name</LabelName>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={state.name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <LabelName>Phone</LabelName>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={state.number}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  onContactAdd: PropTypes.func.isRequired,
};

function init() {
  return { name: '', number: '' };
}

function reducer(state, action) {
  if (action.type === 'reset') {
    return init();
  }

  return { ...state, [action.type]: action.payload };
}

export default ContactForm;
