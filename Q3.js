var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    const url = req.url;
    if (url == "/") {
      fs.readFile("./data.txt", "utf8", function (err, data) {
        if (err) throw err;
        var wordsArray = splitByWords(data);
        var chrCount = charCount(data);
        var msg =
          "Total no. of words : " +
          wordsArray.length +
          " & Total char :" +
          chrCount;
        fs.writeFile("./resultLog.txt", msg, function (err) {
          if (err) throw err;
          console.log(msg);
        });
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(msg);
        return res.end();
      });

      function splitByWords(text) {
        var wordsArray = text.split(/\s+/);
        return wordsArray;
      }

      function charCount(text) {
        var count = text.length;
        return count;
      }
    }
  })
  .listen(8080);
