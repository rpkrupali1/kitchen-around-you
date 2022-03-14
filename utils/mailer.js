const nodemailer = require("nodemailer");
const config = require("../config/email-config");

const transporter = nodemailer.createTransport(config);

module.exports = {
  transporter,
};
