import R from 'ramda';
let calc = {
  add: nums => {
    return R.reduce(R.add, 0, nums);
  },
  sub: nums => {
    return R.reduce(
      (x, y) => {
        return Math.abs(x - y);
      },
      0,
      nums
    );
  },
  mutil: nums => {
    return R.reduce(R.multiply, 1, nums);
  },
  div: nums => {
    return R.reduce(
      (x, y) => {
        if (x > 0 && y > 0) {
          return Math.abs(x / y);
        } else {
          return y;
        }
      },
      0,
      nums
    );
  }
};

module.exports = calc;
