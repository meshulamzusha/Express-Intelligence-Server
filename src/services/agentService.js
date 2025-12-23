import { getFileContent, saveDataToFile } from "../utils/fileUtils.js";


export async function getAgents() {
    try {
        const usersRaw = await getFileContent('./src/data/agents.json')
        return JSON.parse(usersRaw);
    } catch (error) {
        throw error;
    }
}


export async function getAgentById(id) {
    try {
        const agents = await getAgents();
        const agent = agents.find(a => a.id == id);

        if (!agent) {
            throw new Error(`Agent with id ${id} not found.`);
        }

        return agent

    } catch (error) {
        throw error;
    }
}