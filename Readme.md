
# queue

A queue without arrays

## Example

```js
var Queue = require('queue');
var queue = new Queue();

queue
  .enqueue(1)
  .enqueue(2)
  .dequeue()
  .enqueue(3)
  .print() // 2, 3
```

## License

MIT
