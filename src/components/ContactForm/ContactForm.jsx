import React from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelectors, changeFilter } from 'redux/contacts';

import {
  withStyles,
  Card,
  CardContent,
  CardActions,
  TextField,
  MenuItem,
  Button,
  Box
} from "@mui/material";

import {
  StyledButton,
  Input,
  ErrorText,
  DivCenter,
  FormBorder,
} from './ContactForm.styled';

const validationSchema = yup.object({
  name: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});



  
const Form = () => {

  const dispatch = useDispatch();
  // const [createContacts] = useCreateContactsMutation();
  // const { data: contacts } = useFetchContactsQuery();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const onDeleteContacts = id =>
    dispatch(contactsOperations.deleteContacts(id));
  const onToggleCompleted = id =>
    dispatch(contactsOperations.toggleCompleted(id));
  const onAddContacts = values =>
    dispatch(contactsOperations.addContact(values));
    const addContact = async values => {
      contactsOperations.addContact(values);
    };
  const formik = useFormik({
    
    initialValues: {
      name: '',
      number: '',
    },

    validationSchema: validationSchema,
    onSubmit: (value, { resetForm }) => {
        // alert(JSON.stringify(values, null, 2));
        onAddContacts(value);
        const indexName = contacts.findIndex(
          contact => contact.name === value.name
        );
        if (indexName === -1) {
          addContact(value);
          dispatch(changeFilter(''));
        } else {
          alert(value.name + ' is already in contacts');
        }
        resetForm();     

    }

  });

  
  if (!contacts) {
    return;
  }




  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ mb: 5 }}
 
          />
        <TextField
          fullWidth
          id="number"
          name="number"
          label="Number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
          sx={{ mb: 5 }}
          />

        <Button color="primary" variant="contained" fullWidth type="submit">
        Add contact
        </Button>

      </form>
    </div>
  );
};

export default Form;
