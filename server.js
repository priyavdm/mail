var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({

  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
  user: "b149831344194c",
  pass: "b87060d9bd0837"
  }

});

var mailOptions = {
from: 'abc@gmail.com',
to: 'abc@gmail.com',
subject: 'sending email to you',
text: `hi guys this is Priya`
};




transporter.sendMail(mailOptions, function(error, info){
if (error) {
console.log(error);
} else {
console.log('Email sent: ' + info.response);
 }

});