class A {
    constructor (n) {
        this.n = n
        this.n2 = n * 2
    }

    show () {
        console.log(this.n)
        console.log(this.n2)
    }
}

a = new A(6)
a.show()
