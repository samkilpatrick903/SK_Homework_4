
const content = document.querySelector('#content');

// Questions

q1 = {
    index: 0,
    title: "What year did the Grateful Dead form?",
    choices: ['1965', '1970', '1969', '1975'],
    answer: '1965',
}

q2 = {
    index: 1,
    title: "Who wqas the lead guitarist for the Grateful Dead?",
    choices: ['Jerry Garcia', 'Phil Lesh', 'Bill Kreutzman', 'Brent Mydland'],
    answer: 'Jerry Garcia',
}

q3 = {
    index: 2,
    title: "What state did Jack Straw hail from?",
    choices: ['Texas', 'Kansas', 'Louisiana', 'California'],
    answer: 'Kansas',
}

q4 = {
    index: 3,
    title: "Wake up to find that your are the ____ of the world",
    choices: ['hands', 'base', 'eyes', 'weight'],
    answer: 'bamboo',
}

q5 = {
    index: 4,
    title: "What year was the final Grateful Dead show with the full lineup?",
    choices: ['2001', '1995', '1989', '1979'],
    answer: '1989'
}

const questions = [q1, q2, q3, q4, q5];
score = 0;
let index = 0; 

content.addEventListener('click', function(e) {
    if(e.target.id === "start-button" ) {
        runQuiz();
    }
    if(e.target.classList.contains('question-button')){
        let parent = e.target.parentElement; 
        let p = parent.querySelector('p');
        let id = e.target.parentElement.getAttribute('data-index');
        if(e.target.innerHTML === questions[id].correctAnswer){
            p.innerHTML = 'you got the question right!';
            score += 20; 
            questionAdvance(id)
        } else {
            p.innerHTML = 'you got the question wrong!';      
            questionAdvance(id)
        }
    } 
})

function init() {
    
    generateHome();

};

init();

//Home Screen

function generateHome() {

    html = `
    <div id="home">
        <h1>Grateful Dead Quiz</h1>
        <p>What do you know about the Grateful Dead?!</p>
        <button id="start-button">Start Quiz</button>
    </div>
    `;

    content.innerHTML += html; 
}


//Quiz

function runQuiz() {
    
    constructQuiz();

}

function constructQuiz()  {
    content.innerHTML = '';

    for(let i = 0; i < questions.length; i++) {
        
        html = `
        
        <div data-display="hidden" data-index="${questions[i].index}" class="question">
            <h2>${questions[i].title}</h2>
            <button class="question-button">${questions[i].answers[0]}</button>
            <button class="question-button">${questions[i].answers[1]}</button>
            <button class="question-button">${questions[i].answers[2]}</button>
            <button class="question-button">${questions[i].answers[3]}</button>
            <p></p>
        </div>
        `;
    
        content.innerHTML += html;  
        
        const p = content.querySelector('p');
        const div = content.querySelectorAll('div');

        firstQuestion = content.querySelector('div');
        firstQuestion.setAttribute("data-display", "visible")
 
    }
}

function questionAdvance(id){
    if(id === '4'){
        setTimeout(function(){
            showScore();
        }, 1000);
    } else { 
        setTimeout(function() {
            const questionsdev = content.querySelectorAll('.question');  
            let currentQuestion = questionsdev[index];
            currentQuestion.setAttribute('data-display', "hidden");
            index += 1;
            currentQuestion = questionsdev[index];
            currentQuestion.setAttribute('data-display', "visible");
        }, 1000);
    }
}

function showScore(){

    html = `
        
        <div class="score-board">
            <h2>All Done!</h2>
            <p>Your final score was ${score}.</p>
            <form>
                <label>Enter Intials:</label>
                <input type="text">
                <button type="submit">Submit</button>
            </form>
        </div>
        `;
        content.innerHTML = html;  
};

startBtn.addEventListener("click", startQuiz);

// Present Questions

function startQuiz() {
   timerInterval = setInterval(clockTick, 1000);
    startScreen.setAttribute("class", "hide");
        questionBox.removeAttribute("class");
        choices.removeAttribute("class")
        getQuestions();
}
 