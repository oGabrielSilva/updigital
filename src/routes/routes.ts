import express from 'express';
import { IndexController } from '../controllers/IndexController';
import adapter from './adapter';
import { EmployeeController } from '../controllers/EmployeeController';

const router = express.Router();

router.get('/', adapter(IndexController.index));
router.get('/register-employee', adapter(EmployeeController.register));

// API
router.post('/api/lock', adapter(IndexController.lock));

export default router;
