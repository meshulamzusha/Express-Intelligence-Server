import { isUserRegistered } from "../utils/usersUtils.js"


export default async (req, res, next) => {
    const password = req.headers["x-password"]

    if (!password || !(await isUserRegistered(password))) {
        return res.status(401).send('Unauthorized')
    }
    
    next()
}