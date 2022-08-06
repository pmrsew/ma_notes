//from video: https://www.youtube.com/watch?v=NCwa_xi0Uuc&ab_channel=ProgrammingwithMosh


/* VAR VS LET VS CONST */

// var is scoped to the whole function
function sayHello_var(){
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log(i); // will print
}

// let is scoped to block
// use for variables that change
function sayHello_let(){
    for(let i = 0; i < 5; i++){
        console.log(i);
    }
    // console.log(i); <-- would error
}

// const is scoped to block
// use for variable that doesn't change
const x = 1;
// x = 2; <-- would error


/* OBJECTS */

// Object with three members, 1 property and 2 methods
const person1 = {
    name: 'Paige',
    walk: function(){}, // <-- one way to define a new function for an object
    talk() {} // <-- more streamlined version
};

// To call on members:

// dot notation
person1.talk();
person1.name = '';

// bracket notation, pass in string of target member of object
person1['name'] = 'Peach';
// best used if you don't know the name of the member being accessed:
const targetMember = 'name';
person1[targetMember.value] = 'Peach';


/* THIS KEYWORD */

const person2 = {
    name: 'Paige',
    walk(){
        console.log(this);
    }
};

// when 'this' is called by method in an object, will return object
person2.walk();

// when 'this' is called by as standalone function (outside an object)
// it will return a reference of the global object (window in browsers)
    //const walk = person2.walk;
    //walk(); // <= will return 'undefined' because strict mode kicked in
// how to make 'this' always call based on the indended object?

// functions are objects with their own methods
// bind method can set 'this' value correctly
const walk = person2.walk.bind(person2);
walk();


/* ARROW FUNCTIONS */

// no parameters
const no_param = function(){
    return 0;
}
const no_param_arrow = () =>{
    return 0;
}

// with parameters
const square = function(number){
    return number * number;
}

const square_arrow = (number) => {
    return number * number;
}

const square_arrow_streamlined = number => number * number;
console.log(square_arrow_streamlined(5));

// example using arrow function
const jobs = [
    {id: 1, isActive: true},
    {id: 1, isActive: true},
    {id: 1, isActive: false}
];

const activeJobs = jobs.filter(function(job) { return job.isActive; })
const activeJobsArrow = jobs.filter(job => job.isActive);

// arrow function DOESN'T rebind 'this'

//function inside an object
const person3 = {
    talk(){
        console.log('this', this);
    }
};
//function inside a funciton, 'this' no longer returns true object
const person4 = {
    talk(){
        setTimeout(function() {console.log('this', this);}, 1000);
    }
};
//old work around to have 'this' return correctly
const person5 = {
    talk(){
        let self = this;
        setTimeout(function() {console.log('self', self);}, 1000);
    }
};
//proper work around using arrow functions
const person6 = {
    talk(){
        setTimeout(() => console.log('this', this), 1000);
    }
};

person3.talk();
person4.talk(); // <= returns window object since strict mode didn't kick in
person5.talk();
person6.talk();


/* ARRAY.MAP METHOD */

//used to render a list of items
const colors = ['red', 'green', 'blue'];

//passes each item through given function and returns new item to new array
const items = colors.map(function(color){
    return '<li>' + color + '</li>';
});
//streamlined code using arrow function
const itemsArrow = colors.map(color => '<li>' + color + '</li>');
//streamlined code using template literals
const itemsArrowLiteral = colors.map(color => `<li>${color}</li>`);
console.log(itemsArrowLiteral);


/* OBJECT RESTRUCTURING */

const address ={
    street: '',
    city: '',
    country: ''
};

//very repetative to call each property:
    //const street = address.street;
    //const city = address.city;
    //const country = address.country;
//instead, restructure the object:
const {street, city, country} = address;

//if you want to change the name of the property or only call a few:
const{street: st} = address;


/* SPREAD OPERATOR */

const first = [1,2,3];
const second = [4,5,6];

// combining arrays
const combined = first.concat(second); // <= limited
const combinedSpread = [...first, ...second];
const combinedWithAdded = [...first, 'a', ...second, 'b'];

// cloning arrays
const cloneFirst = [...first];
console.log(first);
console.log(cloneFirst);

// combining objects
const firstObj = { name: 'Paige'};
const secondObj = { job: 'Programmer'};
const combinedObj = {...firstObj, ...secondObj, location: 'Iowa'};
console.log(combinedObj);

// cloning object
const firstObjClone = {...firstObj};


/* CLASSES */

// creating objects from scratch each time like so can cause issues with methods
const personA = {
    name: 'Paige',
    walk(){
        console.log("walk");
    }
};
const personB = {
    name: 'Paige',
    walk(){
        console.log("walk");
    }
};

// instead use classes to create a blueprint to make objects from
// classes are caplitalized
class Person {
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log("walk");
    }
}
const person = new Person('Paige');
console.log(person.name);


/* Inheritance */

// use inheritance to have this class include all of another class
// in this example a teacher has/cando all a person can because they ARE a person
class Teacher extends Person{
    //if constructor appears in child class, must use 'super' to call
    //constructor from parent class
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log('teach');
    }
}
const teacherA = new Teacher('Tr. Seward');
console.log(teacherA.name);
const teacherB = new Teacher('Mr. Seward', 'Science');
console.log(teacherB.name + ', ' + teacherB.degree);


/* Modules */

// above, the classes are located in the same file
// modules give the ability to have separate files for each class
// items in modules are private by default
// make modules public by exporting the class then importing into
//      file needed

//import { Cat } from "./cat";
const cat1 = new Cat('Ravioli', 'Gray');
cat1.meow;


/* Named and Default Exports */

// go to cat.js for Step 1

// named export means objects that have been labled as 'export'
//   can be called on by name
//import { Cat } from "./cat";

//default export is the main object being exported by a module

// go to cat.js and you'll see default added after export
//import Cat from "./cat";

//module can have named and default exports

import Cat, {pet} from "./cat";
const cat2 = new Cat('Ravioli', 'Gray');
cat1.meow;