import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

// GET @ /contacts
const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error.message)));
};

// POST @ /contacts
const addContact = description => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', description)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

// DELETE @ /contacts/:id
const deleteContact = contactsId => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactsId}`)
    .then(() => dispatch(deleteContactSuccess(contactsId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

// PATCH @ /contacts/:id
const toggleCompleted =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };

    dispatch(toggleCompletedRequest());

    axios
      .patch(`/contacts/${id}`, update)
      .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
      .catch(error => dispatch(toggleCompletedError(error.message)));
  };

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  toggleCompleted,
};
export default contactsOperations;
