const http = require("http");
const pages = require("./loadContent");

module.exports = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(pages.pages.index);
  } else if (req.url === "/blog") {
    res.end(pages.pages.blog);
  } else if (req.url === "/about") {
    res.end(pages.pages.about);
  } else if (req.url === "/contact") {
    res.end(pages.pages.contact);
  } else if (req.url === "/pricing") {
    res.end(pages.pages.pricing);
  } else if (req.url === "/services") {
    res.end(pages.pages.services);
  } else if (req.url === "/work") {
    res.end(pages.pages.work);
  } else {
    res.write("<p>Page Doesn't Exist<p><a href='/home'>Go Home</a>");
    res.end();
  }
});

