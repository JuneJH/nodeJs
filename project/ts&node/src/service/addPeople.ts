import * as http from 'http'
import queryAllUser from '../dao/getUser';


export default function getPeople(req: http.IncomingMessage, res: http.ServerResponse){
    const response:[] = [];
    queryAllUser((result: [])=>{
        result.forEach(item=>{
            response.push(item);
        })
        res.setHeader("content-type","application/json; charset=utf-8");
        res.setHeader("my_mate","fuck!!!")
        res.writeHead(200);
        res.end(JSON.stringify(response))
    })
}
