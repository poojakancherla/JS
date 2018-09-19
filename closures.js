function interviewQuestion(job) 
{
    return function(name)
    {
        if(job === 'designer')
            console.log(name + ' is a designer');
        else if(job === 'teacher')
            console.log(name + ' is a teacher');
        else
            console.log('Hello ' + name + ', what do you do?');
    }
}

person1 = interviewQuestion('teacher');
person1('Dave');
interviewQuestion('designer')('Jacob');