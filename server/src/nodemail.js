const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const dotenv = require("dotenv");
dotenv.config();

module.exports = async (email, name, description, url) => {
  return new Promise((resolve, reject) => {
    const auth = {
      auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN,
      },
    };

    const nodemailerMailgun = nodemailer.createTransport(mg(auth));

    const mail = {
      from: "Repositories GitHub <repository@mailgun.org>",
      to: email,
      subject: `New repository: ${name}`,
      text: `Repository: ${name} \n Description: ${description} \n Link: ${url}`,
      html: `
         <h4>${name}</h4><br/>
         <p>${description}</p><br/>
         <b><a href=${url}>${url}</a></b>`,
    };

    nodemailerMailgun.sendMail(mail, function (error, info) {
      if (error) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};
