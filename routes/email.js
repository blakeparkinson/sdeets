var nodemailer = require("nodemailer");
var xoauth2 = require('xoauth2');


var transporter = nodemailer.createTransport("SMTP",{
    service: 'gmail',
    auth: {
    XOAuth2: {
      user: process.env.GMAIL_UN, // Your gmail address.
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN
    }
  }
});

module.exports = {

    
    send:function( cb ){

            console.log(process.env);
          var mailOptions = {

            from: 'test', // sender address
            to: 'wizardplow@gmail.com', // list of receivers
            subject: 'testing', // Subject line
            html: '<div>Hello World</div>'
        };

        // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
      console.log('info is: ' + info);
        if (error) {
            console.log('we got an error' + error);
            cb(error);

        } else {
            console.log('email sent');
            cb('hi');

        }
        transporter.close();
    });


    }
}