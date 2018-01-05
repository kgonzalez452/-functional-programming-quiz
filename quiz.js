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
        hoursWorked: 78
    }
]

class Payroll {
    constructor(workers) {
        this.workers = workers
        this.names = this.getNames(this.workers)
        this.fulltime = this.getFulltime(this.workers)
        this.totalLabor = this.getTotalLabor(this.workers)

    }
    getNames(workers) {
        const newarray = workers.map(function(emp){
            return emp.name
        })
        // console.log(newarray)
        return newarray.sort()

        // let arr = new array.sort()
        // return array.map((arr) => {
        // })
    }
    getFulltime(workers) {
        return workers.filter(function (hourlyRate) {
            return (array.hoursWorked >= 60) ? 1 : 0
        })

    }
    getTotalLabor(workers) {
        return workers.reduce((acc, cur, index) => {
            return acc + (cur.hourlyRate * cur.hoursWorked)

            }, 0)
            // return (acc + hoursWorked * hourlyRate) ? 1 : 0
        
    }
}

let payout = new Payroll(array)

console.log(payout.names)
console.log(payout.fulltime)
console.log(payout.totalLabor)