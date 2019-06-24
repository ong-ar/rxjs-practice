const rxjs = require("rxjs");
const operators = require("rxjs/operators");

const of = rxjs.of;
const pipe = rxjs.pipe;
const from = rxjs.from;

const map = operators.map;
const first = operators.first;
const filter = operators.filter;

// For example, the operator called map is analogous to the Array method of the same name. Just as [1, 2, 3].map(x => x * x) will yield [1, 4, 9], the Observable created like this:

map(x => x * x)(of(1, 2, 3)).subscribe(v => console.log(`value: ${v}`));

console.log();

first()(of(1, 2, 3)).subscribe(v => console.log(`value: ${v}`));

// will emit 1, 4, 9. Another useful operator is first:

function discardOddDoubleEven() {
  return pipe(
    filter(v => !(v % 2)),
    map(v => v + v)
  );
}

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  .pipe(discardOddDoubleEven())
  .subscribe(v => console.log(v));
