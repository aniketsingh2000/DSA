class MyQueue{
    constructor(){
        this.inStack = [];
        this.outStack = [];
    }
    push(val){
        this.inStack.push(val);
        //write your code here
    }
    pop(){
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }
    peek() {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        
        return this.outStack[this.outStack.length - 1];
    }
    empty(){
        this.inStack = [];
        //write your code here
    }
}



const queue = new MyQueue();

queue.push(4);
queue.push(6);
queue.push(9);

console.log(queue.peek());