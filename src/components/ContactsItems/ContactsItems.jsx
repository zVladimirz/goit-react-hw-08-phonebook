import PropTypes from 'prop-types';
import { ContactsViewListText } from './ContactsItems.styled';
import { contactsOperations } from 'redux/contacts';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const ContactsItems = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContacts = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      <ContactsViewListText>{name + ': ' + number}</ContactsViewListText>
      <Button
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={() => onDeleteContacts(id)}
      >
        Delete
      </Button>
    </>
  );
};

ContactsItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItems;
