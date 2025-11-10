input = 3

// TODO: Create a function that validates user input
function userValid(input){
    if (input == "undefined"){return "Invalid: No input given"}
    else if (typeof input == "number"){return "Invalid: Input is an iteger"}
    else{return "Valid input given"}
}
// TODO: Create a function that demonstrates multiple error types

function multipleErrors(input){
    try{
        if (typeof input != "number"){throw new TypeError("Input is isn't a integer.");}
        if (input < 0){throw new RangeError("Input is out of range.");}
        if (inptu == 5){console.log(undeclaredVar);}
    }
    catch (error) {
    if (error instanceof TypeError){
        console.error("Caught a TypeError:", error.message );}
    else if (error instanceof RangeError) {
        console.error("Caught a RangeError: ", error.message);} 
    else if (error instanceof ReferenceError){
        console.error("Caught a ReferenceError: ", error.message);}
    }
}
// TODO: Create a collection of helper functions for string manipulation
username = "JoShuA"
string_helpers = {
    upper : function(word){return word.toUpperCase()},
    lower : function(word){return word.toLowerCase()},
    divide : function(word){return word.split("")},
}

console.log(string_helpers.upper(username))
console.log(string_helpers.lower(username))
console.log(string_helpers.divide(username))
console.log("-".repeat(60))
// TODO: Create helper functions for array operations
my_array = [1,2,3,4,5]

array_helpers = {
    pop : function(array){return array.pop()},
    shift : function(array){return array.shift()},
    join: function(array){return array.join()}
}

console.log(array_helpers.pop(my_array))
console.log(array_helpers.shift(my_array))
console.log(array_helpers.join(my_array))