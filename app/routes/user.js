import express from 'express';
import { deleteUser, updateUser } from '../controllers/user';
import awaitErrorHandler from '../utils/errorHandler'

const router = express.Router();

router.delete('/', awaitErrorHandler(deleteUser));
router.put('/', awaitErrorHandler(updateUser));

export default router;