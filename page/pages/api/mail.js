import nodemailer from 'nodemailer';

export default async (req, res) => {
    // console.log(req.body);
    let data=req.body
  var transport = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 2525,
  auth: {
    type: 'OAuth2',
        user: process.env.MY_GMAIL_USERNAME,
        clientId: process.env.MY_OAUTH_CLIENT_ID,
        clientSecret: process.env.MY_OAUTH_CLIENT_SECRET,
        refreshToken: process.env.MY_OAUTH_REFRESH_TOKEN,
        accessToken: process.env.MY_OAUTH_ACCESS_TOKEN
  }
});
var mailOptions = {
    from:' "Site:)OPM" <yesubabu.gudi@gmail.com> ',
  to: '<yesubabu.gudi@gmail.com>,<gunther1817@gmail.com>',
  subject: 'Site:)OPM user contact',
    html:`<div style="color:white;background-color:#212121;min-height:50vh;padding:1rem;"><h4 style="margin:0;">Hey there! </h4><br/> 
            <div >
            <div><b>name</b>  :  ${data.name}</div>
            <div><b>email</b>  :  ${data.email}</div>
            <div><b>mobile</b>  :  ${data.mobile}</div>
            <div><b>message:</b> ${data.message}</div>
            </div>
        </div>`
  
};
transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
    res.status(500).send("internal error....please try again later");

  }else{
    console.log('Message sent: %s', info.messageId);
    res.status(200).send("message sent successfully");
  }
});

};
