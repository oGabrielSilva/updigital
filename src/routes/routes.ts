import express from 'express';
import { IndexController } from '../controllers/IndexController';

const router = express.Router();

router.get('/', IndexController.index);

router.post('/page', IndexController.test);

export default router;
