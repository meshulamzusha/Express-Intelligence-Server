import { generate } from "random-words"
import { getAgents } from "../services/agentService.js";


export async function createAgent(name) {
    try {
        const agents = await getAgents();

        let maxId = agents.reduce((acc, currentAgent) => {
            return (acc = acc > currentAgent.id ? acc : currentAgent.id);
        }, 0);

        return {
            id: maxId + 1,
            name: name,
            nickname: generate(),
            reportCount: 0
        }
        
    } catch (error) {
        throw error
    }   
}