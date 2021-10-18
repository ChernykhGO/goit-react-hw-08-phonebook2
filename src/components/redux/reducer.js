import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import actions from "./actions";
import {
  changeFilter,
  addContactSuccess,
  fetchContactError,
  deleteContactSuccess,
  fetchContactSuccess,
  fetchContactRequest,
} from "./actions";

const items = createReducer([], {
  [fetchContactSuccess]: (_, action) => action.payload,
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});

const error = createReducer(null, {
  [fetchContactError]: (_, action) => action.payload,
  [fetchContactRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  error,
});

// import types from "./types";
// console.log(actions.addContacts.type);

// {
//     phonebook: {
//         items: '',
//         filter: ''
//     }
// }

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case "contacts/changeFilter":
//       return payload;

//     default:npm i redux
//       return state;
//   }
// };
