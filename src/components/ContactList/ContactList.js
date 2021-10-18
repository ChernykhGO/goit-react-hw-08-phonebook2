import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import * as contactsActions from "../redux/actions";
import { deleteContacts } from "../redux/operations";
import { getVisibleContacts } from "../redux/selectors";
import style from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = () => {
  const contacts = useSelector((state) =>
    // getVisibleContacts(state.phonebook.items, state.phonebook.filter)
    getVisibleContacts(state)
  );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(featchContacts());
  // }, [dispatch]);

  const ondeleteContact = (id) => dispatch(deleteContacts(id));

  return (
    <ul className={style.listContact}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.contactItem}>
          <p>
            &#9742; {name}: {number}
          </p>
          <button type="button" onClick={() => ondeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  ondeleteContact: PropTypes.func,
  contacts: PropTypes.array,
};

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
// return allContacts.filter((contact) =>
//   contact.name.toLowerCase().includes(normalizedFilter)
// );
// };

// const mapStateToProps = (state) => ({
//   contacts: getVisibleContacts(state.phonebook.items, state.phonebook.filter),
// });

// const mapStateToProps = (state) => {
//   const { filter, items } = state.phonebook;
//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = getVisibleContacts(items, filter);
//   return {
//     contacts: state.phonebook.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   ondeleteContact: (id) => dispatch(contactsActions.deleteContacts(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
