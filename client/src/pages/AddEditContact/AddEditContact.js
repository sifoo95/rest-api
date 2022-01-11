import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import addBtn from "../../assets/add.png";
import editBtn from "../../assets/edit.png";
import { addContact, editContact } from "../../JS/actions/contact";

import "./AddEditContact.css";

const AddEditContact = () => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const edit = useSelector((state) => state.contactReducer.edit);
  const contactt = useSelector((state) => state.contactReducer.contact);

  const dispatch = useDispatch();
  console.log(contact);
  console.log(contactt);

  useEffect(() => {
    edit
      ? setContact(contactt)
      : setContact({ name: "", email: "", phone: "" });
  }, [edit, contactt]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Form className="MyForm">
        {/*input name*/}
        <Form.Group className="MyLittleForm">
          <Form.Control
            type="text"
            placeholder="Enter your contact name ..."
            name="name"
            value={contact.name}
            onChange={handleChange}
            //onChange={(e) =>setContact({...contact, name : e.target.value})}
          />
          <Form.Text className="text-muted"> Name is required !!</Form.Text>
        </Form.Group>

        {/*input email*/}
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter your contact email ..."
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"> email is required !!</Form.Text>
        </Form.Group>
        {/*input phone*/}
        <Form.Group>
          <Form.Control
            type="number"
            placeholder="Enter your contact phone ..."
            name="phone"
            value={contact.phone}
            onChange={handleChange}
          />
        </Form.Group>
        {/*add or edit button*/}
        {edit ? (
          <Link to="/">
            <img
              src={editBtn}
              alt="edit"
              className="edit-btn"
              onClick={() => dispatch(editContact(contact._id, contact))}
            />
          </Link>
        ) : (
          <Link to="/">
            <img
              src={addBtn}
              alt="add"
              className="add-btn"
              onClick={() => dispatch(addContact(contact))}
            />
          </Link>
        )}
      </Form>
    </div>
  );
};
export default AddEditContact;
