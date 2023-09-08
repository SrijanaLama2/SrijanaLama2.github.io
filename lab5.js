// Solution 1 :
let array1 = [2,20,50,40,3,2] ;
function sum(array1){
  return array1.filter(x => x > 20).reduce((accum,current) => accum + current);

}
console.log(sum(array1));


//Solution 2
let results =  
    ["apple", "banana", "cherry", "date", "grape"].filter(
        function(str) {
            return str.length >= 5 && str.includes('a');
          }
    );




