var express = require('express');
var router = express.Router();
var ContactController = require('../app/Controllers/ContactController');

router.post('/', ContactController.contactStore);
router.get('/lists', ContactController.contactsLists);
router.put('/:id', ContactController.updateContact);
router.delete('/:id', ContactController.deleteContact);
router.get('/:id', ContactController.getContactById);

module.exports = router;
