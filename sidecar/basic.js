exports.handler = async function (event) {
    return `Hello from Lambda - ${process.env.AWS_EXECUTION_ENV}`
}
