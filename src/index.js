const {List} = require('./linked_list');

const spices = ['scary', 'posh', 'ginger', 'sporty', 'baby'];

const ranking = new List(spices);
ranking.reverse();
// ranking.addFirst('scary');
// ranking.addFirst('sporty');
// ranking.addFirst('posh');
// ranking.addLast('ginger');
console.log(ranking.toString());