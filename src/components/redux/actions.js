// import types from "./types";
// import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction("contacts/fetchContactRequest");
export const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
export const fetchContactError = createAction("contacts/fetchContactError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");
// const addContacts = createAction("contacts/add", (data) => ({
//   payload: {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number,
//   },
// }));
// const addContacts = (data) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number,
//   },
// });

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");
// export const deleteContacts = createAction("contacts/delete");
// const deleteContacts = createAction(types.DELETE);
// const deleteContacts = (id) => ({
//   type: types.DELETE,
//   payload: id,
// });

export const changeFilter = createAction("contacts/changeFilter");
// const changeFilter = createAction(types.CHANGE_FILTER);
// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
// const contactsActions = {
//   // addContacts,
//   deleteContacts,
//   changeFilter,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
// };
// export default contactsActions;
