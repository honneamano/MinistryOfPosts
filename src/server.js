import express from "express";
import _ from "lodash";

import webFingerRouter from "app/webFinger";



class MOPServer {

    #app;

    #listenPort;

    constructor({ config }){
        this.#app = express();
        this.#listenPort = _.get(config, "serverPort");

        this.#init();
    }

    listen(){
        this.#app.listen(this.#listenPort);
    }


    #init(){
        this.#app.use(webFingerRouter);
    }
}

export default MOPServer;