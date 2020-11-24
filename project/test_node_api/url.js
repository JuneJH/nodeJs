const { EDESTADDRREQ } = require("constants");

const url = require("url");
const simulationUrl = "http://nodejs.cn/api/url.html#url_url"
console.log("传统url解析",url.parse(simulationUrl));
console.log("WHATWG解析",new URL(simulationUrl))

