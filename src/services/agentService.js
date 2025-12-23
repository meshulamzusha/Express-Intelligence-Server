import { getFileContent, saveDataToFile } from "../utils/fileUtils.js";
import { createAgent } from "../utils/agentsUtils.js";

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


export async function addAgent(name) {
    try {
        const agents = await getAgents();
        const agent = await createAgent(name);
        console.log(agent);
        
        agents.push(agent);
        await saveDataToFile("./src/data/agents.json", JSON.stringify(agents, null, 2));

        return agent;

    } catch (error) {
        throw error;
    }
}