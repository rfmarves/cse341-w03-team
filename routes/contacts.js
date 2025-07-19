const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);
// No validation needed for this route.
// Error handling in case of no contacts

router.get('/:id', contactsController.getSingle);
// Validate for contact ID, handle error.

router.post('/', contactsController.createContact);
// Validate text for First and last names, verify if email is an email, birthday is a date.

router.put('/:id', contactsController.updateContact);
// Same validations for post.

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
