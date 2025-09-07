import express from 'express';
import { RequestHandler } from 'express';

const router = express.Router();

import { signup, signin, getUsers } from './users.controllers';

router.post('/signup', signup as RequestHandler);
router.post('/signin', signin as RequestHandler);
router.get('/users', getUsers as RequestHandler);

export default router;