import { getFileContent } from "../utils/fileUtils.js";


export default async function getUsers() {
    try {
        const usersRaw = await getFileContent('./data/users.json')
        return JSON.parse(usersRaw);
    } catch (error) {
        throw error;
    }
}