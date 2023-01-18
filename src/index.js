const {List} = require('./linked_list');

const spices = ['scary', 'posh', 'ginger', 'sporty', 'baby'];

/* 
WISHLIST
- add elements to the start, end, and arbitrary indices.
- read elements from the start, end, and arbitrary indices.
- delete elements from the start, end, arbitrary indices, and by value.
- get the index of a value in the array or -1 if it is absent.
- get the length of a list.
- get a string representation of a list.
- concatenate two lists.
- split a list into two by an index.
- reverse a linked list...
- bounds check provided indices
- spark joy
*/

const ranking = new List(spices);
ranking.reverse();
// ranking.addFirst('scary');
// ranking.addFirst('sporty');
// ranking.addFirst('posh');
// ranking.addLast('ginger');
console.log(ranking.toString());