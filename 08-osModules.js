// OS: MODULES - Provides many usefull properties and method for interracting with
// the OS and the servers as well

const os = require('os');
// info about the current user
const user = os.userInfo();
console.log(user);

// This method returns the system uptime in seconds
console.log(`the system uptime in seconds is ${os.uptime()}`);

const currentOs = {
    name: os.userInfo(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOs)
