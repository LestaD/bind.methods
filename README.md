# bind.methods

## Readme

Bind selected class methods from constructor

## Usage

```javascript
const bind = bindMethods('bind.methods');

class Example {
  constructor() {
    bind(this, 'onClick');
    // bind(this, ['onDragStart', 'onDragEnd']);
    // bind(this); // bind all class methods
  }
  onClick() {
    console.log(this);
  }
}

const example = new Example();

example.onClick.call(123456); // class Example
```

## License

Library `bind.methods` is licensed under MIT.