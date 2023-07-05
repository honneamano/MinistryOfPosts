import { AgentOfTransmission } from "common/BureauOfTransmission";

var agent = null;

export default function init_or_get(config){
    if(agent) return agent;
    if(config){
        agent = new AgentOfTransmission({ 
            config,
            localName: SERVICE_IDENTIFIER
        });
        return agent.ready();
    }
    throw Error("AgentOfTransmission not initialized.");
}