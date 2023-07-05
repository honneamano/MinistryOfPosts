import * as fs from "fs/promises";
import _ from "lodash";
import toml from "toml";

import Server from "./server";
import agentOfTransmission from "app/agent-of-transmission";


(async function(){

    const configFile = await fs.readFile(_.get(process.argv, 2));
    const configFileParsed = toml.parse(configFile);

    const microserviceConfig = _.get(configFileParsed, SERVICE_IDENTIFIER);
    const bureauOfTransmissionConfig = 
        _.get(configFileParsed, "bureau-of-transmission");

    await agentOfTransmission(bureauOfTransmissionConfig);

    const server = new Server({
        config: microserviceConfig,
    });
    server.listen();

    setInterval(()=>{
        agentOfTransmission().sendMessage(
            "test",
            SERVICE_IDENTIFIER,
            {hello:'world'}
        )
    }, 1000);
})();