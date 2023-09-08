// Solution 1 :

let sum = [2,20,50,40,3,2].filter(x => x > 20).reduce((accum,current) => accum + current);


//Solution 2
let results = ["apple", "banana", "cherry", "date", "grape"].filter(
    word => word.length >= 5 && word.includes('a')
);