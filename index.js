const rxjs = require("rxjs");

const Observable = rxjs.Observable;

const observable = new Observable(function subscribe(subscriber) {
  // Keep track of the interval resource
  const intervalId = setInterval(() => {
    subscriber.next("hi");
  }, 1000);

  // Provide a way of canceling and disposing the interval resource
  return function unsubscribe() {
    console.log("unsubscribe");
    clearInterval(intervalId);
  };
});

const subscribe = observable.subscribe(x => console.log(x));

setTimeout(() => {
  subscribe.unsubscribe();
}, 5000);
