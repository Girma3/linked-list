function Node(value = null, nextNode = null){
    return {
        value, nextNode
    }
}
function LinkedList(head = null){
    this.head = head
    //function to add node at end of the list
    function append(value){
        let newNode = Node(value);
        let current = this.head;
        if(current === null){
          return   this.head = newNode
        }
        else{
            while(current.nextNode){
                current = current.nextNode;
               }
               current.nextNode = newNode;
        }
    }
    //function to add node as head or first item in the list
    function prepend(value){
        let newNode = Node(value);
        let current = this.head;
        if(current === null) return this.head = newNode
        else{
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }
    //function that count the number of node in the list
    function size(){
        let count = 0;
        let current = this.head
        if(current === null) return count
        else{
           while(current){
            count++;
            current = current.nextNode
           }
          
        }
        return count
    }
    //function tah return the first item in the list
    function heads(){
        if(this.head === null) return null
        else if(this.head !== null)return this.head
    }
    //function that return the last elemnet
    function tail(){
        let current = this.head;
        if(current === null) return null
        else{
            while(current.nextNode){
                current = current.nextNode
            }
            return current
        }
       
    }
    //function that return node at given index
    function at(index){
        let current = this.head;
        let count = 0;
        if(current === null) return null
        else if(index === 0){
            return this.head;
        }
        else{
            while(current){
                if(count === index){
                    return current
                }
               current = current.nextNode;
               count++;
            }
        }
        return null
    }
    //function to remove the last element from the list
    function pop(){
        let current = this.head;
        let previous = null;
        if(current === null) return null
        if(this.size() === 1){
            this.head = null;
            return true
        }
        else{
            while(current.nextNode !== null){
                previous  = current;
                current = current.nextNode;
            }
            current = null
            previous.nextNode = null;
            return true
        }
     }
     //function to check if the node exist with given value return true if it is else return false
    function contains(value){
        let current = this.head;
        if(current === null) return false
        if(current.value === value) return true
        else{
            while(current){
                if(current.value === value){
                    return true
                }
                current = current.nextNode
            }
            return false
        }
    }
    //function that return index of node at given value if exist else return null
    function find(value){
        let current = this.head;
        let index = 0
        if(current === null) return null
        else if(this.contains(value) === false)return null
        else if(current.value === value) return index
        else{
            while(current){
                if(current.value === value){
                    return index
                }
                current = current.nextNode;
                index++;
            }
        }
    }
    //function represent list as string to print in console
    function toString(){
        let current = this.head;
        let string = '';
        if(current === null){
            string = 'no list';
            return string
        }
        else{
            
            while(current){
               string += "(" + current.value + ")" + "->" + ""
               current = current.nextNode
            }
           return string +=  "null"
        }
    }
    //function to insert node at given index
    function insertAt(value, index){
        let current = this.head;
        let newNode = Node(value);
        let count = 0;
        let previous = null;
       if(index > this.size()) return false
       else if(index === 0){
        let firstItem =  this.head;
        newNode.nextNode = this.head;
        this.head = newNode
        return true
       }
       else if(index === this.size()){
            let lastItem = this.tail()
            lastItem.nextNode = newNode;
            return true
        }
        
        else{
         while(current){
            if(count === index){
                newNode.nextNode = current;
                previous.nextNode = newNode;
                return true
            }
            previous = current
            current = current.nextNode;
            count++;
        }
          return false
        }
        
    }
    //function to reomove node at given index
    function removeAt(index){
        let current = this.head;
        let previous = null;
        let count = 0
        if(index > this.size() || this.head === null) return false
        else if(index === 0){
           this.head = current.nextNode;
        }
        else{
            while(current){
             if(index === count){
               previous.nextNode = current.nextNode;
               current = null;
               return true
            }
             previous = current;
             current = current.nextNode;
             count++;
            }
            return false
        }

    }

    return {
        head:this.head, append, prepend, size, heads, tail, at, pop, contains, find, toString, insertAt, removeAt

    }
}

let list = LinkedList()
    list.append(1)
    list.prepend(0)
    list.append(2)
    list.append(3)
    console.log(list.head)
    console.log(list.size())
    console.log(list.tail())
    list.insertAt('two', 5)
    list.removeAt(1)
    console.log(list.at(0))
    console.log(list.toString())


