require("dotenv").config();

const db_user = process.env.DB_NAME;
let email_user = process.env.EMAIL_USER;
let email_pw = process.env.EMAIL_PASS;
console.log(email_user, email_pw, db_user);

const emailconfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

module.exports = emailconfig;
