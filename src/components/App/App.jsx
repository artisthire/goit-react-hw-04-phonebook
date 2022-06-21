import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper, Container } from './App.styled';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const INITIAL_CONTACTS = [
  { id: nanoid(6), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(6), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(6), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(6), name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    return savedContacts ? savedContacts : [...INITIAL_CONTACTS];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function handleContactAdd({ name, number }) {
    const normalizeName = name.trim().toLocaleLowerCase();

    const isNameInContacts = contacts.some(
      contact => contact.name.toLocaleLowerCase() === normalizeName
    );

    if (isNameInContacts) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(contacts => [
        ...contacts,
        { id: nanoid(6), name: name.trim(), number: number.trim() },
      ]);
      setFilter('');
    }
  }

  function handleContactRemove(removeContactId) {
    return () => {
      const filteredContacts = contacts.filter(
        contact => contact.id !== removeContactId
      );

      setContacts([...filteredContacts]);
      setFilter('');
    };
  }

  function handleFiterChange({ target }) {
    setFilter(target.value);
  }

  function filterContacts() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const visibleContacts = filterContacts();

  return (
    <Wrapper>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onContactAdd={handleContactAdd} />

        <h2>Contacts</h2>
        <Filter filterValue={filter} onFilterChange={handleFiterChange} />
        {contacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onContactRemove={handleContactRemove}
          />
        )}
      </Container>
    </Wrapper>
  );
}

export default App;
