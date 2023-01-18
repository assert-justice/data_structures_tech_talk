# Nodes and Graphs

So my original plan for this talk was to talk about a few different node based data structures, linked lists, doubly linked lists, queues, binary search trees, maybe a heap if you're nasty. Then I set about writing the linked list class and using the Java linked list class for reference and writing unit tests and realized we did not have enough time.

Maybe we'll come back to those other data structures another day. In the meantime we have something important to talk about.

## Pass by Reference

Consider the following:

```js
const a = 10;
const b = a;
b = b * 2;
console.log(a);
```

What does that print out? Well it should print `10`. `a` and `b` have separate values, changing one doesn't change the other. What about this then?

```js
const a = {val: 10};
const b = a;
b.val = b.val * 2;
console.log(a.val);
```

Now the code prints `20`! What up? How do?

Well `a` and `b` don't really *contain* the object we made. Instead the object is floating around in memory somewhere and both `a` and `b` store a reference to that object. In a lower level language like C this is all made much more explicit. C has pointers, which, to oversimplify, are memory addresses into your computer's RAM.

This is going to be very relevant for the next part.

## Linked Lists

So what is a linked list? How is it different from a regular array? For this we're going to need some diagrams.

Again this would make more sense if we were writing C. With an array you have a single contiguous block of memory. This has some advantages and restrictions. Everything in an array has to take up the same amount of memory. But because of that looking up an element by its index is lightning fast. Just find the start of an array and an offset and bam you're there. What's slow are insertions and deletions. Because the array can't have gaps you have to shift over potentially the entire contents of the array. This is why pushing and popping the end of an array is a lot faster than adding or deleting from the front.

Linked lists are made out of nodes that are floating freely in RAM. You keep track of where the list starts but from there each node points at the next one or it's null in which case that's the end of the list. To find an element by its index you potentially have to loop through the entire list, that's slow. Inserting or deleting though is just a matter of 

Everything in an array is bunched up close which has performance implications because of something called cache coherency. This is getting into how processors work and so is a little out of scope but tl;dr getting data from RAM is slow. There isn't much we can do about it because we're at or near the limits of the speed of electricity. So modern processors don't just grab what you ask for, they grab a bunch of data nearby while they are at it in case you'll need it.

Because of this linked lists are hardly used anymore. They are however fiddly, have lots of annoying edge cases, and are therefore a popular source of misguided interview questions to this day. Such is life. My hope is that this talk will help you with similar problems and interview questions in the future.

Together we're going to make a linked list class. Let's look at the requirements.

(audience participation here)

WISHLIST
- add elements to the start, end, and arbitrary indices.
- read elements from the start, end, and arbitrary indices.
- delete elements from the start, end, arbitrary indices, and by value.
- get the index of a value in the array or -1 if it is absent.
- get the length of a list.
- get a string representation of a list.
- concatenate two lists.
- split a list into two by an index.
- reverse a linked list
- bounds check provided indices
- spark joy

To help us in this endeavor we search for purpose. To what cause shall our linked list class serve? Ranking the Spice Girls.

While we go on writing these methods I want to do something a little new and talk about the tests I wrote while working on the project. I might give a talk about tdd at some point but these tests were super helpful at catching silly mistakes.

I also wrote a script that runs the tests automatically, then formats and saves the result as markdown. It's a little jank but it works.