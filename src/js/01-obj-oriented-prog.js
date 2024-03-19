console.log('Об`єктно-орієнтоване програмування');

/*
 * Процедурне програмування
 */

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);

/*
 * Об'єктно-орієнтоване програмування (ОВП)
 */

const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

console.log(employee.getWage());
