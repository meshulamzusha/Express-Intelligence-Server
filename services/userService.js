import { getFileContent, saveDataToFile } from "../utils/fileUtils.js";
import { createUser } from "../utils/usersUtils.js";

export async function getUsers() {
    try {
        const usersRaw = await getFileContent('./data/users.json')
        return JSON.parse(usersRaw);
    } catch (error) {
        throw error;
    }
}


export async function addUser(username, password) {
    try {
        const users = await getUsers();
        const isUsernameExist = users.some(u => u.username == username)

        if (isUsernameExist) {
            throw new Error("A user with this username already exists.");
        }

        const user = createUser(username, password)
        users.push(user);
        await saveDataToFile('./data/users.json', JSON.stringify(users, null, 2));

        return user
    } catch (error) {
        throw error;
    }
}