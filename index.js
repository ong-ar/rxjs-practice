const rxjs = require("rxjs");

// observable, observer, subscription

const observer = {
  next: function(value) {
    console.log(value);
  },
  error: function(error) {
    console.log(error);
  },
  complete: function() {
    console.log("completed");
  }
};

rxjs.Observable.create(function(obs) {
  obs.next("A value");
  setTimeout(() => {}, 1000);
  obs.next("B value");
  // obs.error("error");
  obs.complete();
}).subscribe(observer);
