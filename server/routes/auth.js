import express from 'express';
const router = express.Router();

//middleswares
import { requireSignin } from '../middleswares';

//controllers
import { register, login, logout, currentUser } from '../controllers/auth';

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

router.get('/current-user', requireSignin, currentUser);

module.exports = router;
