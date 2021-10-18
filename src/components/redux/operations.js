// import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "./actions";

// axios.defaults.baseURL = "http://localhost:4040/";

export const featchContacts = () => async (dispatch) => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get(`/contacts`);
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

// export const featchContacts = createAsyncThunk(
//   "contacts/fetchContacts",
//   async () => {
//     const { data } = await axios.get(`/contacts`);
//     return data;
//   }
// );

export const addContacts = (name, number) => (dispatch) => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post(`/contacts`, contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContacts = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(addContactError(error)));
};

// export default {
//   addContacts,
//   deleteContacts,
//   featchContacts,
// };
