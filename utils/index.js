const nodemailer = require("nodemailer");
const config = require("../config/email-config");
require("dotenv").config();

//file to test emails
async function main() {
  const transporter = nodemailer.createTransport(config);

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "no-reply@kitchenaroundyou.com", // sender address
    to: "rpkrupali@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
