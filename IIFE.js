// writing the function in paranthesis will make the JS parser think it is an expression and not a declaration and 
//won't give an error and the variable 'score' will be hidden

(function(goodLuck)
{
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck)
})(5);

console.log(score); //Will give error as it cannot access score