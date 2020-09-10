const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

exports.contactEmail = functions.https.onCall((data, context) => {
  console.log(data);

  const output = `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
      <li>Name: ${data.name}</li>
      <li>Email: ${data.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${data.message}</p>
  `;

  async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: "garyjllil@outlook.com", // generated ethereal user
        pass: "secret", // generated ethereal password
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

  return main()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});
