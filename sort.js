function Node(data) {
  this.data = data;
  this.next = null;
}

function Stack() {
  this.top = null;
}

Stack.prototype.push = function (data) {
  let stackLinkedList = new Node(data);
  stackLinkedList.next = this.top;
  this.top = stackLinkedList;
}

Stack.prototype.pop = function () {
  if (this.top !== null) {
    let topItem = this.top.data;
    this.top = this.top.next;
    return topItem;
  }
  return null;
}

Stack.prototype.print = function () {
  let curr = this.top;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
}

Stack.prototype.empty = function () {
  (this.top !== null) ? console.log('в стеки есть элементы') : console.log('стэк пуст')
}

let stack = new Stack();
console.log('стэк')
stack.push(2);
stack.push(6);
stack.push(7);
stack.push(9);
stack.push(8);
stack.print();
console.log('вытаскиваем')
stack.pop();
stack.pop();
stack.pop();
stack.empty();
stack.print();


function Queue() {
  this.head = null;
  this.tail = null;
}

Queue.prototype.enqueue = function (data) {
  let queueLinkedList = new Node(data);
  if (this.head === null) {
    this.head = queueLinkedList;
    this.tail = queueLinkedList;
  } else {
    this.tail.next = queueLinkedList;
    this.tail = queueLinkedList;
  }
}

Queue.prototype.dequeue = function () {
  let newNode;
  if (this.head !== null) {
    newNode = this.head.data;
    this.head = this.head.next;
  }
  return newNode;
}

Queue.prototype.print = function () {
  let curr = this.head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
}

Queue.prototype.empty = function () {
  (this.top !== null) ? console.log('в очереди есть элементы') : console.log('очередь пуста')
}

let queue = new Queue();
console.log('очеедь')
queue.enqueue(8);
queue.enqueue(5);
queue.enqueue(9);
queue.print();
console.log('вытаскиваем')
queue.dequeue();
queue.dequeue();
queue.print();
queue.empty()
