console.log("first");
setImmediate(function () {
    console.log("second");
});
console.log("third");

// setImmediate() is used to replace setTimeout(fn,0)