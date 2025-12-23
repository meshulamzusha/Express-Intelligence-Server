import express from 'express';
import auth from '../middleware/authMiddleware.js'
import { 
    getUsers, 
    addUser, 
    updatePassword, 
    deleteUser 
} from '../services/userService.js';

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


router.put('/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const { password } = req.body;

        const user = await updatePassword(username, password)

        res.json({
            user: user,
            message: "Password updated successfully."
        })

    } catch (error) {
        res.send(error.message)
    }
})


router.delete('/:username', async (req, res) => {
    try {
        const { username } = req.params;
        await deleteUser(username)

        res.send("user deleted successfully.")
    } catch (error) {
        res.send(error.message)
    }
})


export default router
