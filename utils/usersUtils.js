import { getUsers } from '../services/userService.js';


export async function isUserRegistered(username, password) {
    try {
        let registered = true
        const users = await getUsers();
        
        const user = users.find(u => {
            return u.username == username && u.password == password
        });
        
        if (!user) {
            registered = false
        }
        
        return registered

    } catch (error) {
        throw error
    }
}


export function createUser(username, password) {
    return {
        username: username,
        password: password
    }
}