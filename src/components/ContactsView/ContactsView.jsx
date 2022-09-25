import { ContactsViewList, ContactsViewListItem } from './ContactsView.styled';
import ContactsItems from 'components/ContactsItems';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useEffect } from 'react';
import Loader from 'components/Loader';

const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoadingСontacts = useSelector(contactsSelectors.getLoading);
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  if (!contacts) {
    return;
  }

  return (
    <>
      {isLoadingСontacts ? (
        <Loader />
      ) : (
        <ContactsViewList>
          {contacts.map(({ id, name, number }) => (
            <ContactsViewListItem key={id}>
              <ContactsItems id={id} name={name} number={number} />
            </ContactsViewListItem>
          ))}
        </ContactsViewList>
      )}
    </>
  );
};

export default ContactsView;
