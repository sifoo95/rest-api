import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../JS/actions/contact'
import ContactCard from '../../components/ContactCard/ContactCard'


import './ContactList.css'

const ContactList = () => {

  const listContacts = useSelector(state => state.contactReducer.listContacts)
  const load = useSelector(state => state.contactReducer.load)
    
  const dispatch  = useDispatch()

    useEffect(() => {
 dispatch(getContacts())
    }, [dispatch]);
    return (
        load ? <h2>waaaaaaaait</h2>
        :
        <div className='ContactList'>
        {listContacts.map(contact =>
            <ContactCard contact={contact} key={contact._id} />
            )}    
        </div>
    )
}
export default ContactList