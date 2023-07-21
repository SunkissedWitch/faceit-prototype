import { NextResponse } from "next/server";

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
    return NextResponse.json({
      response: 'Success'
    },
      { status: 200, statusText: "Success" }
    );

    // return new Response(JSON.stringify({
    //   response: 'Success'
    // }), {
    //   status: 200
    // })
  } catch (error) {
    console.log('error', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500, statusText: "Sending email error" }
    );
  }
}