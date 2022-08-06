import { Animal } from "./animal";

// Step 1
export function pet(){}
// end

export default class Cat extends Animal{
    //if constructor appears in child class, must use 'super' to call
    //constructor from parent class
    constructor(name, color){
        super(name);
        this.color = color;
    }
    meow(){
        console.log('meow');
    }
}