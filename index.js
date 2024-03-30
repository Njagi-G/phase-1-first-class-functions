//Instruction 1:

function receivesAFunction (cb) {
    console.log (cb());
}

receivesAFunction (function () {return "Basic callback function"});


//Instruction 2:

function returnsANamedFunction () {
    
    return function stream () {
        
        console.log("Sadly, no Easter holiday weekend for me!");
    
    }
}

returnsANamedFunction();
console.log(returnsANamedFunction());


//Instruction 3: 

function returnsAnAnonymousFunction () {

    return function () {

        console.log("Hello User1. Please fill in the form to get you started")

    }
}

returnsAnAnonymousFunction();
console.log(returnsAnAnonymousFunction());