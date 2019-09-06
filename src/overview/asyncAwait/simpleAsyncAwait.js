async function action() {
    console.log('action()');
    const a = await doA();
    const b = await doB();
    const c = await doC();
}

function doA() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('doA()');
            resolve();
        }, 2000);
    })
}

function doB() {
    return new Promise((resolve, reject) => {
        console.log('doB()');
        resolve();
    })
}

function doC() {
    return new Promise((resolve, reject) => {
        console.log('doC()');
        resolve();
    })
}

action();