import axios from "axios";
import {
  ADD_CONTACTS_FAIL,
  ADD_CONTACTS_SUCCESS,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_SUCCESS,
  EDIT_CONTACTS_FAIL,
  EDIT_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCC,
  GET_CONTACT_FAIL,
  GET_CONTACT_LOAD,
  GET_CONTACT_SUCC,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../actionsType/contact";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
    let result = await axios.get("./api/contact"); //http://localhost:6000/api/contact
    console.log(result);
    dispatch({ type: GET_CONTACTS_SUCC, payload: result.data.listContacts });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_CONTACTS_FAIL, payload: error.response.data });
  }
};
//delete contact
export const deleteContact = (contactID) => async (dispatch) => {
  try {
    await axios.delete(`/api/contact/${contactID}`);
    dispatch({ type: DELETE_CONTACT_SUCCESS });
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: DELETE_CONTACT_FAIL, payload: error.response.data });
  }
};

// add new contact
export const addContact = (newContact) => async (dispatch) => {
  try {
    await axios.post("/api/contact", newContact);
    dispatch({ type: ADD_CONTACTS_SUCCESS });
    dispatch(getContact());
  } catch (error) {
    dispatch({ type: ADD_CONTACTS_FAIL, payload: error.response.data });
  }
};

//toggle true
export const toggleTrue = () => {
  return {
    type: TOGGLE_TRUE,
  };
};

//toggle false
export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};

//get contact
export const getContact = (contactID) => async (dispatch) => {
  dispatch({ type: GET_CONTACT_LOAD });
  try {
    let result = await axios.get(`/api/contact/${contactID}`);
    dispatch({ type: GET_CONTACT_SUCC, payload: result.data.contactToFind });
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL, payload: error.response.data });
  }
};

//edit contact
export const editContact = (contactID, newContact) => async (dispatch) => {
  try {
    await axios.put(`/api/contact/${contactID}`, newContact);
    dispatch({ type: EDIT_CONTACTS_SUCCESS });
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: EDIT_CONTACTS_FAIL, payload: error.response.data });
  }
};
