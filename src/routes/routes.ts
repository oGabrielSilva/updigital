import express from 'express';
import { IndexController } from '../controllers/IndexController';

const router = express.Router();

router.get('/', IndexController.index);
// router.post('/', (req, res) => {
//     console.log(req.body)
//     res.status(200).end()
// });

export default router;
