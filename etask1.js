const evenemitter = require("events");
const ee = new evenemitter();

ee.on("square", (s) => {
    if (s < 0) {
        console.log("side must be positive")
    }
    else {
        console.log(`perimeter of square ${4 * s}`);
    }
})
ee.emit("square", 10);

ee.on("circle", (r) => {
    if (r < 0) {
        console.log("radius must be positive")
    }
    else {
        console.log(`perimeter of circle ${2 * 3.14 * r}`);
    }
})
ee.emit("circle", -5);