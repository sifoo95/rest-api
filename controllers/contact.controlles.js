const addContact = async (req, res) => {
    try {
    const newContact = req.body
//test name and email required
    if(!newContact.name || !newContact.email) {
        return res.status(400).send({msg: "name and email are required"})
    }
//test email is unique
    const contactToFind = await Contact.findOne({email :newContact.email})
    if(contactToFind) {
        return res.status(400).send({msg : "contact already exist !!!"})
    }
    //create new document
    const contactToAdd = new Contact(newContact)
   await contactToAdd.save()

    res.status(200).send({msg : "Contact added succes ...", contactToAdd })
} catch (error) {
    res.status(400).send({msg: "can not add new contact", error})
}}

//get all contacts
const  getContact = async (req, res) => {
    try {
        const listContacts = await Contact.find()
        res.status(200).send({msg : "this is the list of contacts",listContacts })
    } catch (error) {
        res.status(400).send({msg : "can not get all contact", error})
    }
}

//delete contact
const deleteConatct = async (req, res) => {
    try {
        const contactId = req.params.id
        await Contact.deleteOne({ _id : contactId})
        res.status(200).send({msg : "contact deleted succes" })
    } catch (error) {
        res.status(400).send({msg : "can not get delete contact with this id", error})  
    }
}

//get one contact 
const getontacts = async(req, res) => {
    try {
        const contactToFind = await Contact.findOne({_id : req.params.id})
        res.status(200).send({msg : 'Contact found :', contactToFind})
    } catch (error) {
        res.status(400).send({msg : 'Id not found !', error})  
    }
}
//update contacts
const updateContact = async (req, res) => {
    try {
        const { _id } = req.params
        const newContact = req.body
        let result = await Contact.updateOne({ _id }, { $set: {...newContact}})
        console.log(result)
        if(result.nModifind ===0){
            return res.status(400).send({msg: "Contact already updated"})
        }
        res.status(200).send({msg : "contact updated succ...." }) 
     } catch (error) {
        res.status(400).send({msg : "can not  update contact with this id", error})     
    }
}

module.exports  = controllers = {addContact, getContact, deleteConatct, getontacts, updateContact}