class ListNode{
    value = null;
    next = null;
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class List{
    head = null;
    constructor(values = null){
        if(!values) return;
        let last = null;
        for (const value of values) {
            const node = new ListNode(value);
            if(last === null){
                this.head = node;
            }
            else{
                last.next = node;
            }
            last = node;
        }
    }
    forEach(fn){
        let current = this.head;
        let idx = 0;
        while(current){
            fn(current, idx);
            current = current.next;
            idx++;
        }
    }
    find(fn){
        let current = this.head;
        let idx = 0;
        while(current){
            if(fn(current, idx)) return current;
            current = current.next;
            idx++;
        }
        return null;
    }
    addFirst(value){
        const node = new ListNode(value);
        node.next = this.head;
        this.head = node;
    }
    length(){
        let len = 0;
        // let current = this.head;
        // while(current){
        //     current = current.next;
        //     len++;
        // }
        // return len;
        this.forEach(()=>len++);
        return len;
    }
    toString(){
        const res = [];
        // let current = this.head;
        // while(current){
        //     res.push(current.value);
        //     current = current.next;
        // }
        this.forEach(node => res.push(node.value));
        return res.join(', ');
    }
    getFirst(){
        return this.head ? this.head.value : null;
    }
    getLast(){
        // if(this.head === null) return null;
        // let current = this.head;
        // while(current.next !== null){
        //     current = current.next;
        // }
        // return current;
        return this.find(node => !node.next);
    }
    addLast(value){
        const node = new ListNode(value);
        const last = this.getLast();
        if(last === null) this.head = node;
        else last.next = node;
    }
    addAt(value, idx){
        const node = new ListNode(value);
        const last = this.find((_,i) => idx === i);

        if(last) {
            node.next = 
            last.next = node;
        }
        else this.head = node;
    }
    getAt(idx){
        return this.find((_,i) => idx === i).value;
    }
    cut(idx){
        //
    }
    concat(list){
        //
    }
    reverse(){
        //
    }
}

module.exports = {
    List
}