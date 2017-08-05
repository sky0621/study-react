class B {
    constructor (n) {
        this.n = n
        this.nn = n * n
    }

    show () {
        console.log(this.n)
        console.log(this.nn)
    }
}

b = new B(5)
b.show()
