import express from 'express';
// import { auth } from '../middleware/authMiddleware.js';
import { getAgents, getAgentById } from '../services/agentService.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const agents = await getAgents();
        res.json(agents);
    } catch (error) {
        res.send(error.message);
    }
})


router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await getAgentById(id);

        res.json(user);

    } catch (error) {
        res.send(error.message)
    }
})


export default router