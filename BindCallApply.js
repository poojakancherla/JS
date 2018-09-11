var john = {
    name : 'John',
    job: 'teacher',
    age: 30,
    presentation : function(style, year){
        if(style == 'formal'){
            console.log('Hello ' + 'I am ' + this.name + ' and this is ' + year);
        }
        else if(style == 'casual'){
            console.log('Waddup, '+ this.name + ' here!' + ' It is ' + year);
        }
    }
};

john.presentation('formal', '2006')

var mary = {
    name: 'Mary',
    age: '30',
    job: 'designer'
};

/* Call method where it attaches 'this' method to the object passed in the function */
john.presentation.call(mary, 'casual', '2008');


/* Apply method works similarly and accepts array as argument */

// john.presentation.apply(mary, ['formal', '2008']);



/* Bind method works like Call too, but it doesn't immediately call the function but 
instead it generates the copy of the function so that we can store it somewhere. Useful for preset arguments */

var johnCasual = john.presentation.bind(john, 'casual');

johnCasual('2009');
johnCasual('2010');