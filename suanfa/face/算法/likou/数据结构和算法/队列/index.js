// 队列
class Queue {
  constructor(items) {
      this.items = items || []
  }

  enqueue(element){
      this.items.push(element)
  }

  dequeue(){
      return this.items.shift()
  }

  front(){
      return this.items[0]
  }

  clear(){
      this.items = []
  }

  get size(){
      return this.items.length
  }

  get isEmpty(){
      return !this.items.length
  }

  print() {
      console.log(this.items.toString())
  }
}


// 优先队列
class PriorityQueue {

    constructor() {
        this.items = []
    }

    enqueue(element, priority){
        const queueElement = { element, priority }
        if (this.isEmpty) {
            this.items.push(queueElement)
        } else {
            const preIndex = this.items.findIndex((item) => queueElement.priority < item.priority)
            
            if (preIndex > -1) {
                this.items.splice(preIndex, 0, queueElement)
            } else {
                this.items.push(queueElement)
            }
        }
    }

    dequeue(){
        return this.items.shift()
    }

    front(){
        return this.items[0]
    }

    clear(){
        this.items = []
    }

    get size(){
        return this.items.length
    }

    get isEmpty(){
        return !this.items.length
    }

    print() {
        console.log(this.items)
    }
}

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue('John', 2)
priorityQueue.enqueue('Jack', 1)
priorityQueue.enqueue('Camila', 1)
priorityQueue.enqueue('Surmon', 3)
priorityQueue.enqueue('skyRover', 2)
priorityQueue.enqueue('司马萌', 1)
priorityQueue.print()
console.log(priorityQueue.isEmpty, priorityQueue.size) // false 6


// 循环队列
class LoopQueue extends Queue {

    constructor(items) {
        super(items)
    }

    getIndex(index) {
        const length = this.items.length
        let result = index > length-1 ? (index % length) : index;
        return result
    }

    find(index) {
        return !this.isEmpty ? this.items[this.getIndex(index)] : null
    }
}

const loopQueue = new LoopQueue(['Surmon'])
loopQueue.enqueue('SkyRover')
loopQueue.enqueue('Even')
loopQueue.enqueue('Alice')

console.log(loopQueue.size, loopQueue.isEmpty) // 4 false


loopQueue.print() // 'Evan'
console.log(loopQueue.find(4)) // 'Evan'
console.log(loopQueue.find(5)) // 'Alice'