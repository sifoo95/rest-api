const express = require('express')
//require model
const Contact = require('../model/Contact')
//require router
const router = express.Router()

//require controllers
const controllers = require('../controllers/contact.controlles')

//test 
router.get('/test' , (req, res) => {
    res.send("Hello word")
})

/**
 * @desc  : add new contact
 * @method : post
 * @path :'http://localhost:6000/api/contact/'
 * @data : req.body
 */
router.post('/' ,controllers.addContact )

/**
 * @desc  : get all contacts
 * @method : get
 * @path :'http://localhost:6000/api/contact/'
 * @data : no
 */
router.get('/' ,controllers.getContact )
/**
 * @desc  : delete one contact
 * @method : Delete
 * @path :'http://localhost:6000/api/contact/:id'
 * @data : no
 */
router.delete('/:id' ,controllers.deleteConatct )

/**
 * @desc  : get one contact by id
 * @method : get
 * @path :'http://localhost:6000/api/contact/:id'
 * @data : no
 */
router.get('/:id',controllers.getontacts )
/**
 * @desc  : update contact by id
 * @method : put
 * @path :'http://localhost:6000/api/contact/:id'
 * @data : req.params and req.body
 */
router.put('/:_id', controllers.updateContact)
module.exports = router

