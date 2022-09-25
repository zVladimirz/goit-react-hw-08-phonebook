import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getTotalContactCount = state => {
  const contacts = getAllContacts(state);

  return contacts.length;
};

const getCompletedContactsCount = createSelector([getAllContacts], contacts => {
  return contacts.reduce((total, contact) => (contact.completed ? total + 1 : total), 0);
});

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
  getTotalContactCount,
  getCompletedContactsCount,
};
export default contactsSelectors;
