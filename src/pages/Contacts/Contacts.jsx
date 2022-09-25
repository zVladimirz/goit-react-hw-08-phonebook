import { Wrapper } from './Contacts.styled';
import ContactsView from 'components/ContactsView';
import ContactsFilter from 'components/ContactsFilter';
import ContactForm from 'components/ContactForm';
import Copyright from 'components/Copyright';

function Contacts() {
  return (
    <>
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactsFilter />
        <ContactsView />
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Wrapper>
    </>
  );
}

export default Contacts;
