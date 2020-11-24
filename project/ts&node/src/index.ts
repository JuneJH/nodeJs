import * as http from "http";
import {loader} from './loader';
import * as fs from 'fs';
import * as path from 'path'
import {init} from "./models/db";

(async ()=>{
    const configPath = path.resolve(__dirname,"./config/pathConfig.json")
    const config = await fs.promises.readFile(configPath,{encoding:"utf-8"}).then(data=>JSON.parse(data))
    const server:http.Server = http.createServer((req:http.IncomingMessage,res:http.ServerResponse)=>{
        loader(req,res)
    })
    server.listen(config.port || 9527,()=>{
        console.log("开启服务");
    })
})()
init();




