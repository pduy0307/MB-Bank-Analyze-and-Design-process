const { Client, logger } = require("camunda-external-task-client-js");

// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'creditScoreChecker'
client.subscribe("ReceiveOutcome", async function({ task, taskService }) {
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '20521241@gm.uit.edu.vn',
    pass: 'Duy03072002'
  }
});

var mailOptions = {
  from: '20521241@gm.uit.edu.vn',
  to: 'nduy2984@gmail.com',
  subject: 'YOUR TRANSACTION STATUS',
  text: "UNLINK SUCCESSFULL"
};
console.log(mailOptions);

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
try {
  await taskService.complete(task, taskService);
  console.log("I completed my task successfully!!");
} catch (error) {
  console.error(Failedcompletingmytask, $({error}));
}
});






