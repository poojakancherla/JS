(function()
{
    function Question(question, answers, correct_ans)
    {
        this.question = question;
        this.answers = answers;
        this.correct_ans = correct_ans;
    }

    Question.prototype.displayQuestion = function()
    {
        console.log(this.question);

        for(var i = 0; i < this.answers.length; i++)
        {
            console.log(i + ': '+ this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback)
    {
        var sc;
        if(ans === this.correct_ans)
        {
        console.log('Correct answer!');
        sc = callback(true);
        }
        else
        {
            console.log('Wrong answer. Try again');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score)
    {
        console.log('Your current score is: ' + score);
        console.log('-----------------------------------');
    }

    var question1 = new Question('What is the largest water body?', ['Atlantic', 'Pacific', 'Indian'], 1);
    var question2 = new Question('President of US?', ['Trump', 'Obama', 'George'], 0);
    var question3 = new Question('Country with largest population?', ['India', 'US', 'China'], 2);

    var questions = [question1, question2, question3];

    function score()
    {
        var sc = 0;
        return function(correct)
        {
            if(correct)
                sc++;
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion()
    {        
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');
        
        if(answer !== 'exit')
        {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }        
    }

    nextQuestion();
    
})();

