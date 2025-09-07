import express from 'express';
import { authorize } from '../../middlewares/JWT';
import { RequestHandler } from 'express';

const router = express.Router();

import { signup, signin, getUsers } from './users.controllers';

router.post('/signup', signup as RequestHandler);
router.post('/signin', signin as RequestHandler);
router.get('/users', authorize, getUsers as RequestHandler);

export default router;