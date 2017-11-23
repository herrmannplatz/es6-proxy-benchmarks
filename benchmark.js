const { Suite } = require('benchmark');

const suite = new Suite();
    
const plain = {
  foo() {
    return true;
  }
};

const proxy = new Proxy(plain, {
  get(target, property, receiver) {
    const method = target[property];
    return function (...args) {
      return method.apply(this, args);
    }; 
  }
});

const wrapped = {
  foo: () => plain.foo()
};

suite
  .add('plain', () => plain.foo())
  .add('proxy', () => proxy.foo())
  .add('wrapped', () => wrapped.foo())
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`);
  })
  .run();