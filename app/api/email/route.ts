import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, subject, message } = await request.json();

  const smtpConfig: SMTPTransport.Options = {
    host: "smtp.zeptomail.com",
    port: 587,
    auth: {
      user: process.env.ZEPTOMAIL_USERNAME,
      pass: process.env.ZEPTOMAIL_PASSWORD,
    },
  };

  const transport = nodemailer.createTransport(smtpConfig);

  const mailOptions: Mail.Options = {
    from: process.env.FROM,
    to: process.env.TO,
    subject: `New contact from lgomi.org: ${subject}`,
    text: `
      From: ${name}: ${email}
      Message: ${message}
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();

    return NextResponse.json({ message: "Email Sent." });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
