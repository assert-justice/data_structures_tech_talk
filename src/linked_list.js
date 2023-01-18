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
        // Note: functions that modify the next field of a node are liable to break everything and make you sad. 
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
    _oobError(verb, idx){
        throw `Cannot ${verb} at index ${idx}, out of bounds.`;
    }
    _emptyError(verb){
        throw `Cannot ${verb} with an empty list.`;
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

    addFirst(value){
        const node = new ListNode(value);
        node.next = this.head;
        this.head = node;
    }
    addLast(value){
        if(this.head === null) {this.addFirst(value); return;}
        const node = new ListNode(value);
        const last = this.find(node => !node.next);
        last.next = node;
    }
    addAt(value, idx){
        if(idx === 0) {this.addFirst(value); return;}
        if(this.head === null || idx < 0) this._oobError('add a value', idx);
        const node = new ListNode(value);
        let current = this.head;
        for(let i = 0; i < idx - 1; i++){
            if(current.next === null){
                this._oobError('add a value', idx);
            }
            current = current.next;
        }
        const next = current.next;
        current.next = node;
        node.next = next;
    }
    _getNode(idx){
        const node = this.find((_,i) => idx === i);
        if(node === null) this._oobError('get', idx);
        return node;
    }
    getFirst(){
        if(!this.head) this._emptyError('getFirst');
        return this.head ? this.head.value : null;
    }
    getLast(){
        // if(this.head === null) return null;
        // let current = this.head;
        // while(current.next !== null){
        //     current = current.next;
        // }
        // return current;
        if(this.head === null) this._emptyError('getLast');
        return this.find(node => !node.next).value;
    }
    getAt(idx){
        const entry = this.find((_,i) => idx === i);
        if(entry === null) this._oobError('get', idx);
        return entry.value;
    }
    removeFirst(){
        if(this.head === null) this._emptyError('remove');
        const element = this.head;
        this.head = element.next;
        return element.value;
    }
    removeLast(){
        if(this.head === null) this._emptyError('remove');
        if(this.head.next === null) {this.removeFirst(); return;}
        const penultimate = this.find(node => node.next.next === null);
        const element = penultimate.next;
        penultimate.next = null;
        return element.value;
    }
    removeAt(idx){
        if(this.head === null) this._emptyError('remove');
        if(idx === 0) {this.removeFirst(); return;}
        const penultimate = this.find((_,i) => idx - 1 === i);
        if(penultimate === null) this._oobError('remove an element', idx);
        const element = penultimate.next;
        penultimate.next = element.next;
        return element.value;
    }
    concat(list){
        if(this.head === null) return list;
        const last = this.find(node => !node.next);
        last.next = list.head;
        return this;
    }
    cut(idx){
        if(this.head === null) this._emptyError('cut');
        if(idx < 0) this._oobError('cut a list', idx);
        if(idx === 0){
            return [new List(), this];
        }
        let node;
        // DNSJ (does not spark joy)
        try{
            node = this._getNode(idx - 1);
        }
        catch(_){
            this._oobError('cut a list', idx);
        }
        const newHead = node.next;
        node.next = null;
        const res = new List();
        res.head = newHead;
        return [this, res];
    }
    reverse(){
        // I leave finding an 'in memory' solution to the reader.
        if(this.head === null) return this;
        const stack = [];
        this.forEach(node => stack.push(node.value));
        this.head = new ListNode(stack.pop());
        let current = this.head;
        while(stack.length > 0){
            const node = new ListNode(stack.pop());
            current.next = node;
            current = node;
        }
        return this;
    }
    clear(){this.head = null;}
}

module.exports = {
    List
}