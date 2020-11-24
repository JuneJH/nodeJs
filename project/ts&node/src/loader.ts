import * as http from 'http';
import url from 'url';
import * as fs from 'fs';
import * as path from 'path';
import {apiMap} from './service/control'
export async function loader(req: http.IncomingMessage, res: http.ServerResponse) {
    const configPath = path.resolve(__dirname, "./config/pathConfig.json")
    const config = await fs.promises.readFile(configPath, { encoding: "utf-8" }).then(data => JSON.parse(data))
    const userUrl = path.join(url.parse(req.url!).pathname!) === path.sep ? path.join("./assets/index.html"):url.parse(req.url!).pathname;
    if (config.staticFileType.includes(userUrl?.slice(userUrl.indexOf(".")))) {
        let assets = null;
        let status = null;
        try {
            console.log(path.join(__dirname,userUrl!))
            assets = await fs.promises.readFile(path.join(__dirname,userUrl!)).then(data => data)
            status = 200;
        } catch (e) {
            assets = await fs.promises.readFile(path.join(__dirname, config.assets, "404.html"), { encoding: "utf-8" }).then(data => data)
            status = 404;
        }
        res.writeHead(status);
        res.write(assets);
        res.end();
    } else {
        if(apiMap.get(userUrl)){
            apiMap.get(userUrl)(req,res);
        }else{
            res.writeHead(404);
            res.end();
        }
    }
}










