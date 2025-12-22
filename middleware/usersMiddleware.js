import { isUserRegistered } from "../utils/usersUtils.js"


export default (req, res, next) => {
    const password = req.headers["x-password"]

    if (!password || !isUserRegistered(password)) {
        return res.status(401).send('Unauthorized')
    }
    
    next()
}