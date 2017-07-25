
function doAction() {
    console.log('doAction', Date.now())
}

console.log('hello from my bundleJS')

setInterval(doAction, 5 * 1000)

