import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.post('/', loginRequired, userController.store);
router.get('/', userController.index); // Não deveria existir
router.get('/:id', userController.show); // Não deveria existir
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
