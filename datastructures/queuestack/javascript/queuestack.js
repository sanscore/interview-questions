// Notes:
// A Queue is a FIFO structure, First-In First-Out.
// A Stack is a LIFO structure, Last-In First-Out.
// To make a QueueStack we must either resort the stack on every enqueue, or
//   pop the entire stack on the dequeue and push the remaining contents back

// Create a simple Stack class 
// The stack is backed with an array 
// There are two methods pop and push
// push() adds an element to the end of the array
// pop() removes an element from the end of the array
var Stack = (function() {

  function Stack() {
    this.stack = [];
  }

  Stack.prototype.pop = function() { return this.stack.pop(); }
  Stack.prototype.push = function(x) { return this.stack.push(x); }
  
  return Stack;
}() );

// Create a simple QueueStack
// The QueueStack is back by Stack
// There are two functions enqueue and dequeue
// enqueue() uses an additional Stack, tempStack, to reorganize the Stack
//   to a Queue. This is done one-by-one removing elements from the Stack
//   and placing them into the tempStack. Then push the new element onto
//   the Stack. And, finally, pop all the items from the tempStack and
//   push them onto the Stack.
// dequeue() simply removes the top item off of the Stack because enqueue()
//   has already done all of the heavy lifting.
var QueueStack = (function() {
  function QueueStack() {
    this.queue = new Stack()
  }
  
  QueueStack.prototype.inqueue = function(x) {
    var tempStack = new Stack();
    var temp, ret;
    
    while(temp = this.queue.pop()) {
      tempStack.push(temp);
    }
    
    ret = this.queue.push(x);
    
    while(temp = tempStack.pop()) {
      this.queue.push(temp);
    }
    
    return ret;
  }

  QueueStack.prototype.dequeue = function() {return this.queue.pop();}
  
  return QueueStack;
}() );

