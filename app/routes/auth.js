import express from 'express';
import { authenticateUser } from '../controllers/user';
import awaitErrorHandler from '../utils/errorHandler'

const router = express.Router();

router.post('', awaitErrorHandler(authenticateUser));

export default router;
