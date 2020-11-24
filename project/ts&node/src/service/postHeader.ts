import createMysqlConnection from "../dao/createMysql";
import * as http from 'http';
import * as path from "path";
import * as url from "url";
import * as fs from "fs";

export function postHeader(req: http.IncomingMessage, res: http.ServerResponse) {
    req.on("data", (data) => {
        const fis = fs.createWriteStream("./src/files/test.txt");
        fis.write(data);
        fis.end();
        res.end();
    })
}