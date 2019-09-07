setTimeout(function () {
    console.log("Simple #1");
}, 1000);
console.log("Simple #2");

async function aSetTimeout() {
    let a = await new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Improvement #1");
        }, 2000);
    });

    let b = await new Promise((resolve, reject) => {
        console.log("Improvement #2");
    });
}

aSetTimeout();