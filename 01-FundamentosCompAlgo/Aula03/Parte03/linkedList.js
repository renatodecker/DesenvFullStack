class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.count = 0;
        this.header = null;
        this.tail = null;
    }
    add(element){
        if(this.count == 0)
            this.header = this.tail = element
        else
            this.tail.next = element
            this.tail = element
        this.count++
    }
    print(){
        var aux = this.header

        console.log(this.header.element + " - " + this.tail.next + " - " + this.tail.element)
        /*
        while(aux != null){
            console.log(aux.element)
            aux = aux.next
        }*/
    }
}

var myLL = new LinkedList()

myLL.add(new Node(1))
myLL.print();

myLL.add(new Node(2))
myLL.print()

myLL.add(new Node(4))
myLL.print()

myLL.add(new Node(3))
myLL.print()