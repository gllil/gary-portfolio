const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const API = require("./routes/API");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/sendMail", API);
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post("/api/sendMail", (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

  async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: "garyjllil@outlook.com", // generated ethereal user
        pass: "Buveyboo12!", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Nodemailer Contact" <garyjllil@outlook.com>', // sender address
      to: "garyjllil@gmail.com", // list of receivers
      subject: "Contacting you from your website", // Subject line
      text: null,
      html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  main().catch((err) => console.log(err));
});

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
