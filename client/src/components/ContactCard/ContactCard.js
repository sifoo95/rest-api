import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import editBtn from '../../assets/edit.png'
import avatar from '../../assets/avatar.png'
import deleteBtn from '../../assets/delete.png'

import './ContactCard.css'
import { deleteContact, getContact, toggleTrue } from '../../JS/actions/contact'


const ContactCard = ({ contact }) => {

const dispatch = useDispatch()
    
    return (
        <div className="contact-card">
            <img src={avatar} alt="avatar" className="avatar" />
            <h3>{contact.name}</h3>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <div className="delete-edit-btns">
                {/*delete buttons */}
                <img src={deleteBtn}
                    alt="delete-icon"
                   onClick={() => dispatch(deleteContact(contact._id))}
                />
                   
                  {/*edit buttons */}   
                  <Link to={`/editConatct/${contact._id}`}>
                    <img src={editBtn}
                    onClick={() => {dispatch(toggleTrue()); dispatch(getContact(contact._id))}}
                        alt="edit-icon"
                    />
                </Link>
            </div>
        </div>
    )
}

export default ContactCard