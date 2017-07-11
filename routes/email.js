var nodemailer = require("nodemailer");
var xoauth2 = require('xoauth2');
var swig = require('swig');
//var plainTemplate = swig.compileFile(__dirname + '/../templates/bugreply.txt');


var transporter = nodemailer.createTransport("SMTP",{
    service: 'gmail',
    auth: {
        XOAuth2: {
      user: `no-reply@schooldeets.com`, //process.env.GMAIL_UN, // Your gmail address.
      clientId: `314421930389-f4ngan7qnfk956u07hhp9ikgvl927jas.apps.googleusercontent.com`, //process.env.GMAIL_CLIENT_ID,
      clientSecret: 'CxPtNrSVI-k715gdVd_2eFtP', //process.env.GMAIL_SECRET,
      refreshToken: '1/A2eIu3taBsQcICsiW6PQJWUDe4J7bYYP7XknupbJllA' //process.env.GMAIL_REFRESH_TOKEN
    }

    // XOAuth2: {
    //   user: process.env.GMAIL_UN, // Your gmail address.
    //   clientId: process.env.GMAIL_CLIENT_ID,
    //   clientSecret: process.env.GMAIL_SECRET,
    //   refreshToken: process.env.GMAIL_REFRESH_TOKEN
    // }
  }
});

module.exports = {

    
    send:function( options, err, cb ){
          var template = swig.compileFile(__dirname + `/../templates/${options.template}.html`);

          var html = template({
            //schoolLogo: options.emailOptions.logo,
            //groupIcon: options.emailOptions.icon,
            receiverName: options.receiverName,
            senderName: options.senderName,
            content: options.content,
            group: options.group
            //profilePic: options.emailOptions.profilePic
        });

          var mailOptions = {

            from: options.senderName, // sender address
            to: options.receiver, // list of receivers
            subject: options.subject, // Subject line
            html: html
        };

        // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('we got an error' + error);
            err(error);

        } else {
            console.log('email sent');
            cb('hi');

        }
        transporter.close();
    });


    }
}