const rxjs = require("rxjs");
const operators = require("rxjs/operators");

const { from, Subject } = rxjs;
const { multicast } = operators;

const source = from([1, 2, 3]);
const subject = new Subject();
const multicasted = source.pipe(multicast(subject));

// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
  next: v => console.log(`observerA: ${v}`)
});
multicasted.subscribe({
  next: v => console.log(`observerB: ${v}`)
});

// This is, under the hood, `source.subscribe(subject)`:
multicasted.connect();
