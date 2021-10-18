import React from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import * as contactsActions from "../redux/actions";
import { getFilter } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(event) =>
          dispatch(contactsActions.changeFilter(event.target.value))
        }
      />
    </label>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// const mapStateToProps = (state) => ({
//   value: state.phonebook.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (event) =>
//     dispatch(contactsActions.changeFilter(event.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
