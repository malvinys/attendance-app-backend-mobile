import express from 'express';
import controller from '../controllers/ActivityController';

const router = express.Router();

router.get('/:userId', controller.getActivities);
router.post('/', controller.submitActivity);

export default router;