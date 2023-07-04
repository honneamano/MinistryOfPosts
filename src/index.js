import * as fs from "fs/promises";
import _ from "lodash";
import toml from "toml";

import initBureauOfTransmission from "common/BureauOfTransmission";
import Server from "./server";


(async function(){

    const configFile = await fs.readFile(_.get(process.argv, 2));
    const configFileParsed = toml.parse(configFile);

    const microserviceConfig = _.get(configFileParsed, SERVICE_IDENTIFIER);
    const zeromqConfig = _.get(configFileParsed, "zeromq");

    await initBureauOfTransmission(zeromqConfig);

    const server = new Server({
        config: microserviceConfig,
    });
    server.listen();
})();