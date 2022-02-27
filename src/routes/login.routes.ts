import { Router } from 'express';
const router = Router();

import { singIn, singUp } from '../controllers/user/user.Register';

router.post('/singup', singUp);
router.post('/singin', singIn);

export default router;