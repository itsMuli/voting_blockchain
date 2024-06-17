const crypto = require('crypto');

// Generate a private key
const privateKey = crypto.randomBytes(32).toString('hex');
console.log(privateKey);
