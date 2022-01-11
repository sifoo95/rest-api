import {
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCC,
  GET_CONTACTS_FAIL,
  DELETE_CONTACT_FAIL,
  ADD_CONTACTS_FAIL,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
  GET_CONTACT_SUCC,
  GET_CONTACT_FAIL,
  GET_CONTACT_LOAD,
} from "../actionsType/contact";

const initState = {
  listContacts: [],
  load: false,
  errors: null,
  edit: false,
  contact: {},
};

export const contactReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_LOAD:
      return { ...state, load: true };
    case GET_CONTACTS_SUCC:
      return { ...state, load: false, listContacts: payload };
    case GET_CONTACTS_FAIL:
      return { ...state, load: true, errors: payload };

    case DELETE_CONTACT_FAIL:
      return { ...state, errors: payload };
    case ADD_CONTACTS_FAIL:
      return { ...state, errors: payload };

    case TOGGLE_TRUE:
      return { ...state, edit: true };
    case TOGGLE_FALSE:
      return { ...state, edit: false };

    case GET_CONTACT_LOAD:
      return { ...state, load: true };
    case GET_CONTACT_SUCC:
      return { ...state, load: false, contact: payload };
    case GET_CONTACT_FAIL:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};
export default contactReducer;
