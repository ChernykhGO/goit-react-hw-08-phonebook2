import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import { featchContacts } from "../redux/operations";
// import authSelectors from "../redux/auth/auth-selectors";

export default function ContactsView(params) {
  const dispatch = useDispatch();
  // const isLoadingContact = useSelector(contactsSelectors.getLoading);

  useEffect(() => dispatch(featchContacts()), [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {/* {isLoadingContact && <p>Загружаем...</p>} */}
    </div>
  );
}
