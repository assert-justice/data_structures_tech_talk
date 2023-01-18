const {List} = require('../linked_list');

const spices = ['scary', 'posh', 'ginger', 'sporty', 'baby'];

describe('Linked List Class', ()=>{
    test('it should implement constructor and toString', ()=>{
        const list = new List(spices);
        expect(list.toString()).toBe(spices.join(', '));
    });
    test('it should implement length', ()=>{
        const list = new List(spices);
        expect(list.length()).toBe(spices.length);
    });
    test('it should implement addFirst', ()=>{
        const list = new List();
        for (const spice of spices) {
            list.addFirst(spice);
        }
        expect(list.toString()).toBe([...spices].reverse().join(', '));
    });
    test('it should implement addLast', ()=>{
        const list = new List();
        for (const spice of spices) {
            list.addLast(spice);
        }
        expect(list.toString()).toBe(spices.join(', '));
    });
    test('it should implement addAt', ()=>{
        const list = new List(spices.slice(0, 2));
        list.addLast('baby');
        list.addAt('sporty', 2);
        list.addAt('ginger', 2);
        expect(list.toString()).toBe(spices.join(', '));
    });
    test('addAt at index zero operates like addFirst', ()=>{
        const list = new List();
        for (const spice of spices) {
            list.addAt(spice, 0);
        }
        expect(list.toString()).toBe([...spices].reverse().join(', '));
    });
    test('adding at an index 1 beyond the end of the list operates like addLast', ()=>{
        const list = new List();
        for (const spice of spices) {
            list.addAt(spice, list.length());
        }
        expect(list.toString()).toBe(spices.join(', '));
    });
    test('attempting to add an element at an out of bounds index should fail', ()=>{
        const list = new List(spices);
        expect(()=>list.addAt('error', -2)).toThrow(`Cannot add a value at index -2, out of bounds.`);
        expect(()=>list.addAt('error', 10)).toThrow(`Cannot add a value at index 10, out of bounds.`);
    });
    
    test('it should implement getFirst', ()=>{
        const list = new List(spices);
        expect(list.getFirst()).toBe(spices[0]);
    });
    test('it should implement getLast', ()=>{
        const list = new List(spices);
        expect(list.getLast()).toBe(spices[spices.length - 1]);
    });
    test('it should implement getAt', ()=>{
        const list = new List(spices);
        for (let i = 0; i < spices.length; i++) {
            const spice = spices[i];
            expect(list.getAt(i)).toBe(spice);
        }
    });
    test('attempting to add an element at a negative index should fail', ()=>{
        const list = new List(spices);
        expect(()=>list.addAt('error', -2)).toThrow(`Cannot add a value at index -2, out of bounds.`);
    });
    // Dynamically generated tests? Probably not a good idea.
    [['removeFirst', 0], ['removeLast', spices.length - 1], ['removeAt', 2]].forEach(([method, idx]) => {
        test(`it should implement ${method}`, ()=>{
            const list = new List(spices);
            const res = list[method](idx);
            expect(list.length()).toBe(spices.length - 1);
            expect(res).toBe(spices[idx]);
        });
        test(`attempting to ${method} on an empty list should fail`,()=>{
            const list = new List();
            expect(()=>list[method](0)).toThrow('Cannot remove with an empty list.');
        });
    });
    test(`attempting to removeAt at an out of bounds index should fail`, ()=>{
        const list = new List(spices);
        expect(()=>list.removeAt(-2)).toThrow(`Cannot remove an element at index -2, out of bounds.`);
        expect(()=>list.removeAt(10)).toThrow(`Cannot remove an element at index 10, out of bounds.`);
    });

    test('it should implement concat', ()=>{
        const sa = spices.slice(0, 3);
        const sb = spices.slice(3);
        const answer = sb.concat(sa).join(', ');
        const la = new List(sa);
        const lb = new List(sb);
        const res = lb.concat(la);
        expect(res.toString()).toBe(answer);
    });
    test('Using concat where either list is empty should return the non empty list', ()=>{
        const la = new List(spices);
        const lb = new List();
        expect(la.concat(lb).toString()).toBe(spices.join(', '));
        expect(lb.concat(la).toString()).toBe(spices.join(', '));
    });
    test('implement cut', ()=>{
        const list = new List(spices);
        const [la,lb] = list.cut(3);
        expect(la.toString()).toBe(spices.slice(0,3).join(', '));
        expect(lb.toString()).toBe(spices.slice(3).join(', '));
    });
    test('cutting at index zero returns an empty list and the original list', ()=>{
        const list = new List(spices);
        const [la,lb] = list.cut(0);
        expect(la.toString()).toBe('');
        expect(lb.toString()).toBe(spices.join(', '));
    });
    test('cutting the last index returns the original ist and an empty list', ()=>{
        const list = new List(spices);
        const [la,lb] = list.cut(spices.length);
        expect(lb.toString()).toBe('');
        expect(la.toString()).toBe(spices.join(', '));
    });
    test('cutting out of the bounds of a list throws an error', ()=>{
        const list = new List(spices);
        expect(()=>list.cut(-2)).toThrow(`Cannot cut a list at index -2, out of bounds.`);
        expect(()=>list.cut(10)).toThrow(`Cannot cut a list at index 10, out of bounds.`);
    });

    test('it implements reverse', ()=>{
        const list = new List(spices);
        const rev = list.reverse();
        expect(rev.toString()).toBe([...spices].reverse().join(', '));
    });
    test('it reverses in place', ()=>{
        const list = new List(spices);
        list.reverse();
        expect(list.toString()).toBe([...spices].reverse().join(', '));
    });
});