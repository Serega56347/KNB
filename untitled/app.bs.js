function getRandom(min,max) {
    const number= Math.random() * (max-min) + min
    if (number > (Math.round(number)-0.5)) {
        return Math.round(number)
    } else {
        return Math.floor(number)
    }
}
const a =prompt('min')
const b =prompt('max')
console.log(getRandom(a,b))