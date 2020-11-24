const axios = require("axios").default;
const cheerio = require("cheerio");

async function getHtml() {
    const html = await axios.get("https://book.douban.com/latest").then(data => data.data);
    return html;
}

async function getLinks() {
    const html = await getHtml();
    const $ = cheerio.load(html);
    const lis = $("#content .cover-col-4 li .cover")
    const links = lis.map((i,ele)=>{
        const href = ele.attribs.href;
        return href;
    }).get();
    return links;
}

async function getDetail(url){
    const html = await axios.get(url).then(data=>data.data);
    const $ = cheerio.load(html);
    const name = $("h1 span").text().trim();
    const imgUrl = $("#mainpic img").attr("src");
    const spanOm = $("#info span.pl");
    const publishDateOm = spanOm.filter(function(i,ele){
        return $(ele).text().trim().includes("出版年");
    })
    const publishDate = publishDateOm[0].nextSibling.nodeValue.trim();
    const authorOm = spanOm.filter(function(i,ele){
        return $(ele).text().trim().includes("作者")
    })
    let author = "";
    authorOm.nextAll("a").map((i,ele)=>{
        author += $(ele).text().trim()+"/";
    })
    author = author.slice(0,-1)
    return {
        name,imgUrl,publishDate,author
    }
}
async function getBooks(){
    const links =await getLinks();
    const promiseBooks = links.map(function(link){
        return getDetail(link)
    })
    const result = await Promise.all(promiseBooks)
    return result;
}

const Book = require("../models/Book");
getBooks().then(function(data){
    Book.bulkCreate(data).then(data=>{
        console.log("添加数据库完成")
    })
})
