import express from 'express';

const router = express.Router();

// will call controler function
router.post('/create-student', UserControllers.createStudent);

export const UserRoutes = router;
