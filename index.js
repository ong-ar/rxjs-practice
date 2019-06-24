const rxjs = require("rxjs");

const Observable = rxjs.Observable;

const observable = new Observable(function subscribe(subscriber) {
  const id = setInterval(() => {
    subscriber.next("hi");
  }, 1000);
});

observable.subscribe(x => console.log(x));
