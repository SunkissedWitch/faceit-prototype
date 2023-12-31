import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { formatEmailMessage } from "@/utils/formatMail";

const { EMAIL_USER, EMAIL_PASS, } = process.env;
const FACEIT_EMAIL = 'annagekata@protonmail.com';
// ToDo: replace current FACEIT_EMAIL with the next row, when everything going to final deploy
// const FACEIT_EMAIL = 'info@faceit.com.ua';

export async function POST(request) {
  const res = await request.json();
  try {
    const { email, full_name, message } = res?.data;
  
    if (!email || !full_name || !message) {
      return NextResponse.json(
        { error: "The following fields are required: email, full_name, message" },
        { status: 404, statusText: "Email error" }
      );
    }

    const mailMessage = formatEmailMessage(res.data);

    // EMAIL_PASS must be your app password from https://myaccount.google.com/apppasswords
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: EMAIL_USER,
      to: FACEIT_EMAIL,
      subject: "New message from FaceIT portal!",
      html: mailMessage,
    };
    const result = await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    if (result?.response) {
      return NextResponse.json(
        {
          response: `Success. Email sent: ${result.response}`,
        },
        { status: 200, statusText: "Email sent successfully" }
      );
    }

  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500, statusText: "Sending email error" }
    );
  }
}
