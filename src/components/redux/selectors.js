import { createSelector } from "@reduxjs/toolkit";

export const getFilter = (state) => state.phonebook.filter;
export const getAllContacts = (state) => state.phonebook.items;

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// export default {
//   getFilter,
//   getAllContacts,
//   getVisibleContacts,
// };

// const getVisibleContacts = (state) => {
//   const filter = getFilter(state);
//   const allContacts = getAllContacts(state);
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// }; перед. с мемоизацией
