const http = require("http");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const { text } = require("stream/consumers");

require("dotenv").config();
const PORT = 3000;
const publicDir = path.join(__dirname, "../../FrontEnd");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    let filePath = req.url === "/" ? "/index.html" : req.url;
    let fullPath = path.join(publicDir, filePath);
    let ext = path.extname(fullPath);
    let contentType = "text/html";

    switch (ext) {
      case ".css":
        contentType = "text/css";
        break;
      case ".js":
        contentType = "application/javascript";
        break;
      case ".json":
        contentType = "application/json";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".jpg":
      case ".jpeg":
        contentType = "image/jpeg";
        break;
    }

    fs.readFile(fullPath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end("Archivo no encontrado");
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      }
    });
  }

  if (req.method === "POST" && req.url === "/contact") {
    let body = "";

    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      const data = JSON.parse(body);
      const { name, email, service, message } = data;
      console.log(name, email, service, message);

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      let mailOptions = {
        to: "jonnyp.dev@gmail.com",
        subject: `nuevo mensaje de contacto de ${name}`,
        text: `nombre: ${name}
                 email: ${email}
            servicio: ${service}
          mensaje: ${message}`,
      };

      try {
        await transporter.sendMail(mailOptions);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Correo enviado con éxito" }));
      } catch (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Error al enviar el correo" }));
      }
    });
  }
});
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
