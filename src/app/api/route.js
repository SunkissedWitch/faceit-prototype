import { NextResponse } from "next/server";
// import { createTransport } from 'nodemailer';

// const { EMAIL_USER, EMAIL_PASS } = process.env

export async function POST(request) {
  const res = await request.json();
  try {
    console.log('res', res)
    const { email, full_name, message } = res?.data
    if (!email || !full_name || !message) {
      return NextResponse.json(
        { error: 'The following fields are required: email, full_name, message' },
        { status: 404, statusText: "Email error" }
      );
    }
    // ToDo: add sending an email

    // const transporter = createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: EMAIL_USER,
    //     pass: EMAIL_PASS
    //   }
    // });

    // const mailOptions = {
    //   from: EMAIL_USER,
    //   to: email,
    //   subject: 'Sending Email using Node.js',
    //   html: '<h1>Welcome</h1><p>That was easy!</p>'
    // };

    // transporter.sendMail(mailOptions, function(error, info){
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //   }
    // });

    return NextResponse.json({
      response: 'Success'
    },
      { status: 200, statusText: "Success" }
    );

  } catch (error) {
    console.log('error', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500, statusText: "Sending email error" }
    );
  }
}