import calc from '../calc';

test('calc can add 2 + 2', () => {
  let actual = calc.add([2, 2]);
  let expected = 4;
  expect(actual).toEqual(expected);
});

test('calc can add 2+2+2', () => {
  let actual = calc.add([2, 2, 2]);
  let expected = 6;
  expect(actual).toEqual(expected);
});

test('calc can subtract 2-2', () => {
  let actual = calc.sub([2, 2]);
  let expected = 0;
  expect(actual).toEqual(expected);
});

test('calc can subtract 6-2-2', () => {
  let actual = calc.sub([6, 2, 2]);
  let expected = 2;
  expect(actual).toEqual(expected);
});

test('calc can mulitipy 2*2', () => {
  let actual = calc.mutil([2, 2]);
  let expected = 4;
  expect(actual).toEqual(expected);
});

test('calc can add 2*2*2', () => {
  let actual = calc.mutil([2, 2, 2]);
  let expected = 8;
  expect(actual).toEqual(expected);
});

test('calc can divide 4/2', () => {
  let actual = calc.div([4, 2]);
  let expected = 2;
  expect(actual).toEqual(expected);
});

test('calc can add 20/5/2', () => {
  let actual = calc.div([20, 5, 2]);
  let expected = 2;
  expect(actual).toEqual(expected);
});
