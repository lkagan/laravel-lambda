exports.handler = async function (event, context) {
    return `
    <h2>Hello from Node in AWS Lambda via Laravel ver ${event.laravelVersion}!</h2>
    <ul>
       <li>JS code saved to file in Laravel project</li>
       <li>Laravel packages it up, deploys, and activates Lambda function.</li>
       <li>Laravel calls the Lambda function and outputs the response, which is this content.</li>
       <li>AWS request ID: ${context.awsRequestId}</li>
   </ul>
    `;
}
