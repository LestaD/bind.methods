const bind = require('./index')

class A {
  constructor() {
    bind(this, ['foo'])
  }
  foo() {
    if ('A' !== this.constructor.name)
      throw new Error('invalid bind to array')
     console.log('A', this)
  }
}
class B {
  constructor() {
    bind(this, 'foo')
  }
  foo() {
    if ('B' !== this.constructor.name)
      throw new Error('invalid bind to string')
    console.log('B', this);
  }
}
class C {
  constructor() {
    bind(this)
  }
  foo() {
    if ('C' !== this.constructor.name)
      throw new Error('invalid default bind')
    console.log('C', this);
  }
}

const a = new A
const b = new B
const c = new C

a.foo.apply(123)
b.foo.apply(123)
c.foo.apply(123)
