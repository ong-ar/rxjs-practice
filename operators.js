const rxjs = require("rxjs");
const operators = require("rxjs/operators");

const of = rxjs.of;

const map = operators.map;
const first = operators.first;

// For example, the operator called map is analogous to the Array method of the same name. Just as [1, 2, 3].map(x => x * x) will yield [1, 4, 9], the Observable created like this:

map(x => x * x)(of(1, 2, 3)).subscribe(v => console.log(`value: ${v}`));

console.log();

// will emit 1, 4, 9. Another useful operator is first:

first()(of(1, 2, 3)).subscribe(v => console.log(`value: ${v}`));
