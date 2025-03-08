console.log(this); 
// Output (in a browser): Window {...} (refers to the global window object)

const person = {
    name: "Tamim",
    greet: function (){
        console.log(`Hello, ${this.name}`);
    }
}

person.greet(); 
// Output: Hello, Tamim (because `this` refers to the `person` object)
