import * as http from 'http';
import * as url from 'url';
import * as path from 'path';
import * as fs from 'fs'
export default async function downloadImg (req:http.IncomingMessage,res:http.ServerResponse){
    const imgPath = path.join(__dirname,"../assets/img/front.jpg")
    const img =await fs.promises.readFile(imgPath).then(data=>data);
    res.setHeader("content-type","application/octet-stream");
    res.setHeader("Content-Disposition","attachment; filename=front.jpg")
    res.end(img);    
}