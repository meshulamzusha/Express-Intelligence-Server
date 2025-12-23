import express from 'express';
import auth from '../middleware/usersMiddleware.js'
import { getUsers, addUser } from '../services/userService.js';

const router = express.Router();
router.use(auth)

router.get('/', async (req, res) => {
    try {
        const users = await getUsers() 
        res.json(users)
    } catch (error) {
        res.send(error.message)
    }
})


router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        await addUser(username, password)
        res.send('User added successfully.')
    } catch (error) {
        res.send(error.message)
    }
})


export default router
