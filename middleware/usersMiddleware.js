import { isUserRegistered } from "../utils/usersUtils.js"


export default async (req, res, next) => {
    const username = req.headers["x-username"];
    const password = req.headers["x-password"];
    
    if (!password || !(await isUserRegistered(username, password))) {
        return res.status(401).send('Unauthorized');
    }
    
    next();
}