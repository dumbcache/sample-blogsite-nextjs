import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
    process.env.MY_OAUTH_CLIENT_ID,
    process.env.MY_OAUTH_CLIENT_SECRET,
    process.env.MY_OAUTH_REDIRECT_URL
);
oauth2Client.setCredentials({
    refresh_token: process.env.MY_OAUTH_REFRESH_TOKEN,
});
const accessToken = oauth2Client.getAccessToken();

export default async (req, res) => {
    console.log(req.body);
    let data = req.body;
    var Transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 2525,
        auth: {
            type: "OAuth2",
            user: process.env.MY_GMAIL_USERNAME,
            clientId: process.env.MY_OAUTH_CLIENT_ID,
            clientSecret: process.env.MY_OAUTH_CLIENT_SECRET,
            refreshToken: process.env.MY_OAUTH_REFRESH_TOKEN,
            accessToken: accessToken,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    var mailOptions = {
        from: ' "Site:)OPM" <yesubabu.gudi@gmail.com> ',
        to: "<yesubabu.gudi@gmail.com>,<gunther1817@gmail.com>",
        subject: "Site:)OPM user contact",
        html: `<div style="color:white;background-color:#212121;min-height:50vh;padding:1rem;"><h4 style="margin:0;">Hey there! </h4><br/> 
            <div >
            <div><b>name</b>  :  ${data.name}</div>
            <div><b>email</b>  :  ${data.email}</div>
            <div><b>mobile</b>  :  ${data.mobile}</div>
            <div><b>message:</b> ${data.message}</div>
            </div>
        </div>`,
    };
    Transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console("inside error");
            console.log(error);
            res.status(500).send("internal error....please try again later");
        } else {
            console.log("inside else");
            console.log("Message sent: %s", info.messageId);
            res.status(200).send("message sent successfully");
        }
        Transport.close();
    });
};
