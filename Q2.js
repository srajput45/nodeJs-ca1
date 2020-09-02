const fs = require("fs");

function reqHandler(req, res){
    const url = req.url;
    if (url == "/") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Send Message</title></head>");
      res.write(
        "<body><form action='/msg' method='POST'><lable for='firstName'>First Name: </lable><input type='text' name='firstName' id='firstName' placeholder='Shubham'/><br/><br /><lable for='lastName'>Last Name: </lable><input type='text' name='lastName' id='lastName' placeholder='Rajput'/><br/><br /><Button type='submit'>Send</button></form></body>"
      );
      res.write("</html>");
      return res.end();
    }
    if (url === "/msg" && req.method === "POST") {
      const body = [];
      req.on("data", (chunks) => {
        body.push(chunks);
      });
      return req.on("end", () => {
        const parseData = Buffer.concat(body).toString();
        const msg = parseData.split("&");
        const fname = msg[0].split("=");
        const lname = msg[1].split("=");
        fs.writeFile("message.txt", "Your full name is " + fname[1] + " " + lname[1], () => {
          res.statusCode = 302;
          res.setHeader("Location", "/sucess");
          return res.end();
        });
      });
    }
    if (url == "/sucess") {
      res.statusCode = 201;
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Send Message</title></head>");
      res.write(
        "<body><h1>Name saved!!</h1></body>");
      res.write("</html>");
      return res.end();
    }
  };
module.exports = reqHandler;
