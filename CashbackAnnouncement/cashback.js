const { Variables } = require("camunda-external-task-client-js");
const { Client, logger } = require("camunda-external-task-client-js");


// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'creditScoreChecker'
client.subscribe("Cashback", async function({ task, taskService }) {
    const value = task.variables.get('value');
    const name = task.variables.get('name');
    console.log('Bạn Duy đã hoàn về số tiền là: 1.000.000đ');
    const processVariable = new Variables();
    await taskService.complete(task, processVariable)
})







