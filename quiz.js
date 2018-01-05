const array = [{
        name: 'Larry Lobster',
        hourlyRate: 10.00,
        hoursWorked: 16
    },
    {
        name: 'Pinhead Larry',
        hourlyRate: 12.50,
        hoursWorked: 20
    },
    {
        name: 'Bubble Buddy',
        hourlyRate: 8.50,
        hoursWorked: 28
    }
]

class PayRoll {
    constructor(array) {
        this.array = array
        this.getNames = this.getNames(this.array)
        this.getFulltime = this.getFulltime(this.array)
        this.getTotalLabor = this.getTotalLabor(this.array)

    }
    getNames(array) {
        // let arr = new array.sort()
        return array.map((arr) => {
            // return arr.sort()
        })
    }
    getFulltime(array) {
        return array.filter(function (hourlyRate) {
            return (array.hourlyRate > 60) ? 1 : 0
        })

    }
    getTotalLabor(array) {
        return array.reduce((acc, cur, index) => {
            return acc + array.hoursWorked * array.hourlyRate 
            // return (acc + hoursWorked * hourlyRate) ? 1 : 0
        })
    }
}

let payout = new PayRoll(array)

console.log(payout.getNames)
console.log(payout.getTotalLabor)
console.log(payout.getFulltime)