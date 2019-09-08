process.on('unhandledRejection', (err) => {
    console.log(err)
});

new Promise((resolve, reject) => {
    throw new Error('Inside promises throw new Error()');
})
    .then(console.log('Hello, log'))
    .catch(console.error)