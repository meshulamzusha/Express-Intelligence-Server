import express from 'express';
import auth from '../middleware/usersMiddleware.js'
import getUsers from '../services/userService.js';

const router = express.Router();

router.get('/', auth, async (req, res) => {
    try {
        const users = await getUsers() 
        res.json(users)
    } catch (error) {
        res.send(error.message)
    }
})


export default router
