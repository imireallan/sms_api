import express from 'express';
import { editContact, findContacts, createContact, deleteContact } from '../controllers/contacts';
import awaitErrorHandler from '../utils/errorHandler'


const router = express.Router();

router.get('', awaitErrorHandler(findContacts));
router.get('/:number', awaitErrorHandler(findContacts));
router.put('/:number', awaitErrorHandler(editContact));
router.post('', awaitErrorHandler(createContact));
router.delete('/:id', awaitErrorHandler(deleteContact));

export default router;