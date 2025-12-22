import getUsers from '../services/userService.js'


export async function isUserRegistered(password) {
    try {
        let registered = true
        const users = await getUsers();
        const user = users.find(u => u.password === password);

        if (!user) {
            registered = false
        }

        console.log(registered);
        
        return registered

    } catch (error) {
        throw error
    }
}