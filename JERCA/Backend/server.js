const http = require("http");
const nodemailer = require("nodemailer");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "https://jercaservices.com");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === "POST" && req.url === "/contact") {
    let body = "";

    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      try {
        const data = JSON.parse(body);
        const { name, email, service, message } = data;

        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        let mailOptions = {
          to: "jonnyp.dev@gmail.com",
          subject: `Nuevo mensaje de contacto de ${name}`,
          text: `
Nombre: ${name}
Email: ${email}
Servicio: ${service}
Mensaje: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Correo enviado con éxito" }));
      } catch (err) {
        console.error("Error:", err);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Error al enviar el correo" }));
      }
    });
  } else {
    res.writeHead(404);
    res.end("Ruta no válida");
  }
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
