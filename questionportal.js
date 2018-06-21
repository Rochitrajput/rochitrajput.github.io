var score=0;
function Question(question,answer,correct)
{
    this.question=question;
    this.answer=answer;
    this.correct=correct;
    
}
//all object can access through prototype chain bcoz ni toh sare instance ka same method ho jayega same question and ans display hge
Question.prototype.displayQuestion = function ()
{
    console.log(this.question);
    
    for(var i=0;i< this.answer.length;i++)
        {
            console.log(i + ': ' + this.answer[i]);
        }
}

Question.prototype.checkAnswer = function(ans)
{
    if(ans === this.correct)
        {
            score++;
            console.log('Correct ans');
            console.log('the score is'+score);
        }
    else
        {
            console.log('Wrong answer');
             console.log('the score is ' +score);
        }
}

// USE AN ARRAY TO STORE THE ANSWER qki ek he variable m sab store ho jayega
var q0 = new Question ('What is capital of India ? ',['DELHI','BANGLORE','RAJASTHAN'],0);

var q1 = new Question ('Where is taj mahal located ?' , ['DELHI','AGRA','MUMBAI'],1);

var q2 = new Question ('How many states are there in India ?' , [28,29,27],1);
var question_s = [q0,q1,q2];
var n=0;
nextQuestion();





function nextQuestion()
{
    
//var n=Math.floor(Math.random() * question_s.length);
//runs till exit is encountered
question_s[n].displayQuestion();
//only number of question times
var answer_s = prompt('please select any option from 0 1 2 and EXIT to quit');

    
    if(answer_s !== 'exit')// in order to exit from game
        {
            question_s[n].checkAnswer(parseInt(answer_s));
            n++;
   nextQuestion();
        }
}
