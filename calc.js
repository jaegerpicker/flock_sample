import R from 'ramda';
let calc = {
  add: (...nums) => {
    return R.reduce(R.add, nums)();
  },
  sub: (...nums) => {
    return R.reduce(R.subtract, nums);
  },
  mutil: (...nums) => {
    return R.reduce(R.multiply, 1, nums);
  },
  div: (...nums) => {
    return R.reduce(R.divide, nums);
  }
};

module.exports = calc;
