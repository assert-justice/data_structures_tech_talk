<span style=color:red>FAIL</span> src/__tests__/linked_list.spec.js
<br>  Linked List Class
<br>    <span style=color:green>√</span> it should implement constructor and toString (2 ms)
<br>    <span style=color:red>×</span> it should implement length (2 ms)
<br>    <span style=color:green>√</span> it should implement addFirst (1 ms)
<br>    <span style=color:green>√</span> it should implement addLast
<br>    <span style=color:green>√</span> it should implement addAt
<br>    <span style=color:green>√</span> addAt at index zero operates like addFirst
<br>    <span style=color:red>×</span> adding at an index 1 beyond the end of the list operates like addLast (2 ms)
<br>    <span style=color:green>√</span> attempting to add an element at an out of bounds index should fail (1 ms)
<br>    <span style=color:green>√</span> it should implement getFirst
<br>    <span style=color:green>√</span> it should implement getLast
<br>    <span style=color:green>√</span> it should implement getAt (1 ms)
<br>    <span style=color:green>√</span> attempting to add an element at a negative index should fail
<br>    <span style=color:red>×</span> it should implement removeFirst (1 ms)
<br>    <span style=color:green>√</span> attempting to removeFirst on an empty list should fail
<br>    <span style=color:red>×</span> it should implement removeLast
<br>    <span style=color:green>√</span> attempting to removeLast on an empty list should fail
<br>    <span style=color:red>×</span> it should implement removeAt
<br>    <span style=color:green>√</span> attempting to removeAt on an empty list should fail (1 ms)
<br>    <span style=color:green>√</span> attempting to removeAt at an out of bounds index should fail
<br>    <span style=color:green>√</span> it should implement concat
<br>    <span style=color:green>√</span> Using concat where either list is empty should return the non empty list
<br>    <span style=color:green>√</span> implement cut (1 ms)
<br>    <span style=color:green>√</span> cutting at index zero returns an empty list and the original list
<br>    <span style=color:green>√</span> cutting the last index returns the original ist and an empty list (1 ms)
<br>    <span style=color:green>√</span> cutting out of the bounds of a list throws an error
<br>    <span style=color:green>√</span> it implements reverse
<br>    <span style=color:green>√</span> it reverses in place (1 ms)

  ● Linked List Class › it should implement length

`    expect(received).toBe(expected) // Object.is equality`

- Expected: 5
- Received: 0

```
      10 |     test('it should implement length', ()=>{
      11 |         const list = new List(spices);
    > 12 |         expect(list.length()).toBe(spices.length);
         |                               ^
      13 |     });
      14 |     test('it should implement addFirst', ()=>{
      15 |         const list = new List();
```

`      at Object.toBe (src/__tests__/linked_list.spec.js:12:31)`

  ● Linked List Class › adding at an index 1 beyond the end of the list operates like addLast

`    expect(received).toBe(expected) // Object.is equality`

- Expected: "scary, posh, ginger, sporty, baby"
- Received: "baby, sporty, ginger, posh, scary"

```
      45 |             list.addAt(spice, list.length());
      46 |         }
    > 47 |         expect(list.toString()).toBe(spices.join(', '));
         |                                 ^
      48 |     });
      49 |     test('attempting to add an element at an out of bounds index should fail', ()=>{
      50 |         const list = new List(spices);
```

`      at Object.toBe (src/__tests__/linked_list.spec.js:47:33)`

  ● Linked List Class › it should implement removeFirst

`    expect(received).toBe(expected) // Object.is equality`

- Expected: 4
- Received: 0

```
      77 |             const list = new List(spices);
      78 |             const res = list[method](idx);
    > 79 |             expect(list.length()).toBe(spices.length - 1);
         |                                   ^
      80 |             expect(res).toBe(spices[idx]);
      81 |         });
      82 |         test(`attempting to ${method} on an empty list should fail`,()=>{
```

`      at Object.toBe (src/__tests__/linked_list.spec.js:79:35)`

  ● Linked List Class › it should implement removeLast

`    expect(received).toBe(expected) // Object.is equality`

- Expected: 4
- Received: 0

```
      77 |             const list = new List(spices);
      78 |             const res = list[method](idx);
    > 79 |             expect(list.length()).toBe(spices.length - 1);
         |                                   ^
      80 |             expect(res).toBe(spices[idx]);
      81 |         });
      82 |         test(`attempting to ${method} on an empty list should fail`,()=>{
```

`      at Object.toBe (src/__tests__/linked_list.spec.js:79:35)`

Test Suites: 1 failed, 1 total<br>
Tests:       5 failed, 22 passed, 27 total<br>
Snapshots:   0 total<br>
Time:        0.517 s, estimated 1 s<br>
Ran all test suites.