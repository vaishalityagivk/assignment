import _ from 'lodash';
function LoadashExp2()
{

let c3 = _.slice(nums, 2, 6);
console.log(c1);

let c4 = _.slice(nums, 0, 8);
console.log(c2);


//Lodash random number
let r = _.random(10);
console.log(r);

r = _.random(5, 10);
console.log(r);

////Lodash random array element
//With the _.sample function, we can pick a random element from an array.
let word = _.sample(words);
console.log(word);

console.log(_.shuffle(words));


//Lodash _.times function
//The _.times executes the function n times.
_.times(4, () => {

    console.log("brave");
})


//Lodash _.delay function
function message()
{
    console.log("Some message");
}

_.delay(message, 150);
console.log("Some other message");


//Lodash determine data type
//isno isstring ,is object etc
let vals = [1, 2, 'good', [1, 2], {name: 'Peter', age: 32}];

vals.forEach( (e) => {

    if (_.isNumber(e)) {
        console.log(`${e} is a number`);
    }

    if (_.isString(e)) {
        console.log(JSON.stringify(e) + ' is a string');
    }

    if (_.isArray(e)) {
        console.log(JSON.stringify(e) + ' is an array');
    }

    if (_.isObject(e)) {
        console.log(JSON.stringify(e) + ' is an object');
    }

});


//Lodash _.range function
//The Lodash _.range function creates an array of numbers. The function accepts the start, end, and step parameters.

let val = _.range(10);
console.log(val);

let vals2 = _.range(0, 15);
console.log(vals2);

let vals3 = _.range(0, 15, 3);
console.log(vals3);

////Lodash maximum and minimum
//max n min val
let vals1 = [-3, 4, 0, 12, 43, 9, -12];

let min = _.min(vals1);
console.log(min);

let max = _.max(vals1);
console.log(max);

max = _.max(_.range(5, 25));
console.log(max);

let obs = [{n: 12}, {n: -4}, {n: 4}, {n: -11}];

min = _.minBy(obs, 'n');
console.log(min);

max = _.maxBy(obs, 'n');
console.log(max);

//Lodash _.sum function
//In the code example, we compute and print the sum of array values.
let abc = [-2, 0, 3, 7, -5, 1, 2];

let sum = _.sum(abc);
console.log(sum);

//Lodash _.curry
//In the example, we turn the multiply function into a curried version.
function multiply(a, b, c) {

    return a * b * c;
}

let curried = _.curry(multiply);

let ret = curried(2)(3)(4);
console.log(ret);

//Lodash collection filter
//using filter
let num = [4, -5, 3, 2, -1, 7, -6, 8, 9];

let pos_nums = _.filter(num, (e) => e > 0);
console.log(pos_nums);


//Lodash collection find
//using find
let users = [
  { name: 'John', age: 25 },
  { name: 'Lenny', age: 51 },
  { name: 'Andrew', age: 43 },
  { name: 'Peter', age: 81 },
  { name: 'Anna', age: 43 },
  { name: 'Albert', age: 76 },
  { name: 'Adam', age: 47 },
  { name: 'Robert', age: 72 }
];

let u1 = _.find(users, {name: 'Adam'});
console.log(u1);

let u2 = _.find(users, (u) => { return u.age > 60 });
console.log(u2);

let u3 = _.findLast(users, (u) => { return u.age > 60 });
console.log(u3);


//Lodash collection pull
//In the example, we have an array of numbers. We remove all numbers 1 and 2 from the array.
let num1 = [1, 2, 3, 1, 2, 2, 4, 5, 7, 8];
 
_.pull(num1, 1, 2);
console.log(num1);


//Lodash collection take
//The functions take some values from the array of integers and create new arrays. The second optional parameter specifies the number of values to take.

let a = [1, 2, 3, 4, 5, 6]

let nums12 = _.take(a);
let nums13 = _.take(a, 2);
let nums14 = _.takeRight(a, 3)

console.log(nums12);
console.log(nums13);
console.log(nums14);

//Lodash collection reduce
//In the example, we use the reduce operation on a list of integers and strings.
let array = [4, 5, 3, 2, 1, 7, 6, 8, 9];

let sum1 = _.reduce(array, (total, next) => { return total + next });
console.log(sum1);

let colours = ["red", "green", "white", "blue", "black"];

let res = _.reduceRight(colours, (next, total) => { return `${total}-${next}` });
console.log(res);

//Lodash reduce - count occurrences
//The thearray of words, everal words are included multiple times. The initial value is an empty object. The reducer function either creates a new property or increases the value of the property.
let words11 = ['sky', 'forest', 'wood', 'sky', 'rock', 'cloud', 
    'sky', 'forest', 'rock', 'sky'];

let tally = _.reduce(words11, (total, next) => {

  total[next] = (total[next] || 0) + 1 ;

  return total;
}, {});
console.log(tally);


//Lodash reduce - group objects by property
//We have an array of users. We group the users by their occupation. The initial value is an empty object. The resulting object has the occupations as properties; each property contains a list of users with the corresponding occupation.
let user1 = [
  { name: 'John', age: 25, occupation: 'gardener' },
  { name: 'Lenny', age: 51, occupation: 'programmer' },
  { name: 'Andrew', age: 43, occupation: 'teacher' },
  { name: 'Peter', age: 52, occupation: 'gardener' },
  { name: 'Anna', age: 43, occupation: 'teacher' },
  { name: 'Albert', age: 46, occupation: 'programmer' },
  { name: 'Adam', age: 47, occupation: 'teacher' },
  { name: 'Robert', age: 32, occupation: 'driver' }
];

let grouped = _.reduce(user1, (result, user) => {

    (result[user.occupation] || (result[user.occupation] = [])).push(user);  
    return result;
}, {});

console.log(grouped);

//Lodash string case
//In the example, we modify the case of words with _.camelCase, _.capitalize, ._kebabCase, _lowerCase, and _.upperCase.
console.log(_.map(words, _.camelCase));
console.log(_.map(words, _.capitalize));
console.log(_.map(words, _.kebabCase));
console.log(_.map(words, _.lowerCase));
console.log(_.map(words, _.upperCase));


//Lodash string _.startsWith and _.endsWith
//startwithnend with
let wordss = ["tank", "boy", "tourist", "ten",
        "pen", "car", "marble", "sonnet", "pleasant",
        "ink", "atom"]

console.log("Starting with 't'");
wordss.forEach( e => {

    if (_.startsWith(e, 't')) {

        console.log(e);
    }
});

console.log("Ending with 'k'");
wordss.forEach( e => {

    if (_.endsWith(e, 'k')) {

        console.log(e);
    }
});

//Lodash string padding
//padstar
let value = [657, 122, 3245, 345, 99, 18];

value.forEach( e => {

    console.log(_.padStart(e.toString(), 20, '.'));
});

//Lodash string trim
//trim
let asd = '\tfalcon\t';

let trimmed = _.trim(asd);
console.log(trimmed + 'owl');

let trimmed2 = _.trimStart(asd);
console.log(trimmed2 + 'owl');

let trimmed3 = _.trimEnd(asd);
console.log(trimmed3 + 'owl');

//In this example, we remove two custom characters from an array of strings. We also use the _.map function.
let aaa = ['_falcon', '-owl-', '_-sky-_'];
let trimmed1 = _.map(aaa, (word) => { return _.trim(word, '-_')});

console.log(trimmed1);


//Lodash object keys and values
//keys and values
let p = {age: 24, name: "Rebecca", occupation: "teacher"};

let keys = _.keys(p);
console.log(keys);

let values = _.values(p);
console.log(values);


//Lodash object picking
//picking
console.log(_.pick({ name: 'John', age: 25 }, 'name'));
console.log(_.pick({ name: 'John', age: 25 }, 'age'));

//Lodash object at
//We have a list of objects. We get the values by specifying the path to the given property.
let usersone = [
  { id: 1, name: 'John', about: { 'age': 25, 'colours': ['red', 'green'], } },
  { id: 2, name: 'Lenny', about: { 'age': 51, 'colours': ['blue'], } },
  { id: 3, name: 'Andy', about: { 'age': 43, 'colours': ['orange', 'steelblue'], } },
  { id: 4, name: 'Peter', about: { 'age': 52, 'colours': ['black'], } },
  { id: 5, name: 'Anna', about: { 'age': 43, 'colours': ['purple'], } },
];


let name = _.at(usersone[2], 'name');
console.log(name);

let colour = _.at(usersone[0], 'about.colours[0]');
console.log(colour);

//Lodash object get and set
//The _.set function sets the value at the path of the object. If a portion of the path does not exist, it is created. The _.get function gets the value at the path of object; if the value does not exist, we can provide a default one.
let data = { user: { name: "John Doe", age: 34, occupation: "gardener"} };
 
_.set(data, "user.age", 36);
console.log(data);

console.log(_.get(data, "user.name", "unknown"));
console.log(_.get(data, "user.marital_status", "unknown"))


//Lodash iterate object properties
//The _.forIn function can be used to iterate over object properties.
let poo = {age: 24, name: "Rebecca", occupation: "teacher"};

_.forIn(poo, (value, key) => {

    console.log(`${key}: ${value}`);
});
return(
      <div>
      
        <p>{c2}</p>
        <p>{c3}</p>
        <p>{c4}</p>
        <p>{r}</p>
        
      </div>
    )
}
export default LoadashExp2;