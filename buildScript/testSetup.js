
//run mocha with es6
require('babel-register')();

//stop webpack feat THAT MOCHA DOSENT UNDERSTAND
require.extensions['.css'] = function(){}
