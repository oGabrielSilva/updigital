import express from 'express';
import { IndexController } from '../controllers/IndexController';
import adapter from './adapter';

const router = express.Router();

router.get('/', adapter(IndexController.index));
router.get('/register-employee', adapter(IndexController.index));

export default router;
