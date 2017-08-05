function * counter(x) {
    yield x * x
    yield x * x * x
    yield x * x * x * x
}

const ge = counter()
var res = ge.next()
while (res.done) {
    console.log(res.value)
    res = ge.next()
}
