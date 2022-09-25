import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';
import TextField from '@mui/material/TextField';

const ContactsFilter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  const onChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name="findContact"
      label="Find contacts by name"
      onChange={onChange}
    />
  );
};

export default ContactsFilter;
