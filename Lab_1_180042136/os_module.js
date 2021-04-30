const os = require("os");

console.log(os);

const userInfo = os.userInfo();
console.log(userInfo);

const upTime = os.uptime();
console.log(upTime);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS);
