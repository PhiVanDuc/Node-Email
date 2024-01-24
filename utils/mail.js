"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "phivanduc325@gmail.com",
    pass: "qvsr aclx ulfn yleh",
  },
});

// 25
// 465
// 567


module.exports = async (to, subject, message = '', root_url = '', id) => {
    return await transporter.sendMail({
        from: '"Phi Van Duc" <phivanduc325@gmail.com>',
        to,
        subject,
        html: message + ` <img src="${root_url}/track/${id}" style="width: 1px; height: 1px;" />`,
    });
}