import nodemailer from "nodemailer";
export async function sendEmail(to,subject,html){
const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: "arwaabdelall1@gmail.com",
    pass: "sslq tzrk cdax zpau",
  },
});
  
  const info = await transporter.sendMail({
    from: '"Trip Project Website👻" <arwaabdelall1@gmail.com>', 
    to,
    subject, 
    html, 
  })
};