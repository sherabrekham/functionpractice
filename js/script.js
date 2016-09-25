// i will write a function that says hello
// this this function will take one argument,
// called name, which is string
function sayHello(name){
  //console.log('Hello,'+ name);
}

// i will write some variables, which will be
// strings of people names.
var myName = 'Jamphel';
var friendName = 'Tashi';

// here i call the function say hello.
sayHello('Jamphel');
sayHello(friendName);

// i will write a function that will greet a person
// the person will be passed to the function as an object
// the function will passed that object and greet the person
function greetPerson(person){
  //console.log('Hello, '+person.firstName+'. You are '+person.age+' years old.');
}

// i will make an object that describe a person
var myObject = {
  firstName: 'Jamphel',
  lastName: 'Sherab',
  age: 24
}

// i will create another objectthat describe my frienf
var friendObject = {
  firstName: 'Tashi',
  lastName: 'Dolma',
  age: 25
}

// i will call the greetperson function, passing myObject as its argument
greetPerson(myObject);
greetPerson(friendObject);

// i will now make an array of object, each object will describe a person
 var personList = [
  {
    firstName: 'Jamphel',
    lastName:'Sherab',
    age: 24
  },
  {
    firstName: 'Tashi',
  lastName: 'Dolma',
  age: 32
},
{
  firstName: 'Kelsang',
  lastName: 'Nyima',
  age:21
},
{

    firstName: 'Kunga',
  lastName: 'Chodon',
  age: 38
}
];

// i will write a function that will greet people
// it takes as its argument an array, and each item
// in the array is an object that describes a person.
function greetPeople(list) {

// i will loop through the the item in my array a for loop
for (var i = 0;i<list.length;i++){

// this variable is trhe current itemin the array that
// the for loop is itterating through
  var currentPerson = list[i];


  // greet each person in turn,
  //console.log('Hello,'+currentPerson.firstName+'. You are '+currentPerson.age+'years old.');

}

}

// call the greetpeople function and pass PersonList to it
greetPeople(personList);

// i will make a function that sorts people by age
// this function takes an argument, called list,
// which is an array of people, where each person is
// an object
function sortPeople(list){

// create two arrays, one for older people and one for younger people
// this will be blank arrays, that we will populate our forEach loop
var older = [];
var younger =[];

// loop through array
  list.forEach(function(d,i){

if (d.age < 30){
younger.push(d);
} else {
older.push(d);
}

 })

 // this functon will return our arrays as an object
var buckets = {
  olderList: older,
  youngerList: younger
};

return buckets;

}

// call sort people and pass the person list to it
sortPeople(personList);

// make anothe arrays with more people
var morePeople = [
  {
    firstName: 'Lobsang',
    lastName: 'Namgyal',
    age:17
  },
  {
    firstName: 'Tenzin',
    lastName: 'Methok',
    age:12

  },
  {
    firstName: 'Sonam',
    lastName: 'Tashi',
    age:44
  },
];

// run the function again with new arrays
sortPeople(morePeople);

var morePeopleSorted = sortPeople(morePeople);
var personListSorted =sortPeople(personList);

var personListYounger = personListSorted.youngerList;
console.log(personListYounger);
console.log(personList);
