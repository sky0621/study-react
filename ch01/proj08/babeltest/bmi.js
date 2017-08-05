class BMI {
    constructor (height, weight) {
        this.height = height
        this.weight = weight
        this.bmi = this.calc()
    }

    calc () {
        const heightM = this.height / 100
        return this.weight / (heightM ** 2)
    }

    print () {
        let res = '普通'
        if (this.bmi >= 25) res = '肥満'
        else if (this.bmi >= 18.5) res = '普通'
        else res = '痩せ'
        console.log('BMI=', this.bmi, res)
    }
}

const bmiOld = new BMI(165, 66)
bmiOld.print()

console.log('===========================')

const bmiNow = new BMI(165, 58)
bmiNow.print()

console.log('===========================')
console.log('===========================')

const bmi2 = new BMI(165, 70)
bmi2.print()

const bmi3 = new BMI(165, 50)
bmi3.print()
