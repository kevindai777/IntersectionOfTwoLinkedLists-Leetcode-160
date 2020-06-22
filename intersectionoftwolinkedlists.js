//Objective is to find the intersection of two linked lists.

class Node {
    constructor(data, next = null) { //if next is not given, assume it is empty
      this.data = data
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let headA = new Node(4)
headA.next = new Node(1)
headA.next.next = new Node(8)
headA.next.next.next = new Node(4)
headA.next.next.next.next = new Node(5)

let headB = new Node(5)
headB.next = new Node(0)
headB.next.next = new Node(1)
headB.next.next.next = new Node(8)
headB.next.next.next.next = new Node(4)
headB.next.next.next.next.next = new Node(5)


//O(n + m) solution that keeps track of all nodes in headA via a hashset
//then checks if that same node exists in headB.

let set = new Set()

let curr = headA 
while (curr) {
    set.add(curr)
    curr = curr.next
}

let curr2 = headB 
while (curr2) {
    if (set.has(curr2)) {
        return curr2
    }
    curr2 = curr2.next
}