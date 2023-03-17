
const {john, peter} = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alternative-export')
require('./7-mind-grenade')
sayHi('namee')
sayHi(john)
sayHi(peter)

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// method returns system uptime in seconds 
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOs = {
  name:os.type(),
  release:os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOs);