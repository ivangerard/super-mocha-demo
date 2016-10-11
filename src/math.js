let math = module.exports = {

  isOdd: (n) => {
    return Math.abs(n % 2) === 1
  },

  isEven: (n) => {
    return n % 2 === 0
  },

  factorial: (n) => {
    if (n < 0)
      return NaN
    if (n === 0)
      return 1
    return n * math.factorial(n - 1)
  }

}
