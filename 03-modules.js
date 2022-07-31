// Globals- No windows: in node there is no window. why? because there is no browser
// console.log(__dirname);


const {admin, developer} = require('./04-firstModule');
const sayHi = require('./05-secondModules');

sayHi(admin);
sayHi(developer);