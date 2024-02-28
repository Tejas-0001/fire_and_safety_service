

// import { NextApiRequest, NextApiResponse } from "next";
// require("dotenv").config();
// const nodemailer = require("nodemailer");

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     try {
//       const { name, email, message } = req.body;

//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         host: "smtp.gmail.com",
//         port: 587,
//         auth: {
//           user: process.env.USER,
//           pass: process.env.APP_PASSWORD,
//         },
//       });

//       const mailOptions = {
//         from: {
//           name: name,
//           address: process.env.USER,
//         },
//         to: email,
//         subject: "Contact-Us : Fire and Safety Services",
//         text: message,
//         html: `
//           <h1>Contact Details</h1>
//           <ul>
//             <li>Name: ${name}</li>
//             <li>Email: ${email}</li>
//             <li>Message: ${message}</li>
//           </ul>
//         `,
//       };

//       await transporter.sendMail(mailOptions);
//       console.log("Email has been sent successfully");

//       return res.status(200).json({ message: "Email sent successfully!" });
//     } catch (error) {
//       console.error("Failed to send email:", error);
//       return res.status(500).json({ message: "Failed to send email!" });
//     }
//   } else {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }
// }


import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data = await request.json();
  console.log("123")
  console.log(data)
  // return NextResponse.json({hello:"world"});

  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD
    }
  });

  const mailOptions = {
    // from: data.email,
    from: process.env.USER,
    to: process.env.SENDER,
    subject: "Contact-Us : Fire and Safety Services",
    text: data.message,
    html: `
              <h1>Contact Details</h1>
              <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
                <li>Message: ${data.message}</li>
              </ul>
            `,
  };

  return await transporter
    .sendMail(mailOptions)
    .then((response: nodemailer.SentMessageInfo) => {
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 }
      );
    })
    .catch((error: nodemailer.SentMessageInfo) => {
      console.log(error)
      return NextResponse.json(
        { error: true, emailSent: false, errors: [error] },
        { status: 500 }
      );
    });
}