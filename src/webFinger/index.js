import { Router } from "express";

const webFingerRouter = new Router();

webFingerRouter.get("/.well-known/webfinger", onWebFinger);
async function onWebFinger(req, res){
    
}



export default webFingerRouter;