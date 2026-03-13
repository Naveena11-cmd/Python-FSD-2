function test(name, callback) {
    console.log("first", name);
    callback();
}

function last() {
    console.log("last")
}

test("node js", last);

const m = function () {
    console.log("hi")
}
setTimeout(m, 3000);