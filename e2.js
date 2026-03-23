const evenemitter = require("events");
const ee = new evenemitter();

var f1 = (m) => { console.log(`message 1 ${m}`); }
var f2 = (m) => { console.log(`message 2 ${m}`); }

ee.on("e1", f1);
ee.on("e1", f2);

ee.on("e1", () => { console.log("another func"); })
ee.on("e2", f1);
ee.on("e2", f2);

var c = ee.listenerCount("e1");
console.log(`count of e1 is ${c}`);

var c1 = ee.listenerCount("e2");
console.log(`count of e2 is ${c1}`);

ee.emit("e1", "event task");
ee.emit("e2", "Welcome students!");

ee.removeListener("e1", f1);  //removes only one listener . listener count of e1=2 now
var cr = ee.listenerCount("e1");
console.log(`count of e1 after one remove is ${cr}`);

ee.removeAllListeners("e2");
var cr1 = ee.listenerCount("e2");
console.log(`count of e2 after remove all is ${cr1}`);