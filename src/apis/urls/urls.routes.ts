import express from 'express';
import { RequestHandler } from 'express';
import { authorize } from '../../middlewares/JWT';

const router = express.Router();

import { shorten, redirect, deleteUrl } from './urls.controllers';

router.post('/shorten/:userId', authorize, shorten as RequestHandler);
router.get('/:code', redirect as RequestHandler);
router.delete('/:code', authorize, deleteUrl as RequestHandler);

export default router;