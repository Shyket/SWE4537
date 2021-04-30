const fs = require("fs");
var pages ={};

pages.about = fs.readFileSync("./HTML/about.html","utf-8");

pages.blog = fs.readFileSync("./HTML/blog.html", "utf-8");

pages.contact = fs.readFileSync("./HTML/contact.html", "utf-8");

pages.index = fs.readFileSync("./HTML/index.html", "utf-8");

pages.pricing = fs.readFileSync("./HTML/pricing.html", "utf-8");

pages.services = fs.readFileSync("./HTML/services.html", "utf-8");

pages.work = fs.readFileSync("./HTML/work.html", "utf-8");

module.exports = {pages};