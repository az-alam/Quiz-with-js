const button = document.querySelector('button');
const screen1 = document.querySelector('#screen1');
const screen2 = document.querySelector('#screen2');
const screen3 = document.querySelector('#screen3');
const timer = document.querySelector('.timer');
let question=document.querySelector('.question');
let option=document.querySelector('.options');
let qustionCounter = 0;
let optionCounter = 0;
const data = [
    {
        question: '3+5+3',
        answer: 11,
        Options: [11, 10, 15, 8]
    },
    {
        question: '3+5',
        answer: 8,
        Options: [11, 9, 7, 8]
    },
    {
        question: '3-0',
        answer: 3,
        Options: [1, 3, 13, 8]
    },
    {
        question: '10-5',
        answer: 5,
        Options: [-5, 10, 5, 8]
    },
    {
        question: '2+2-2',
        answer: 2,
        Options: [1, 0, 2, -2]
    },
]

button.onclick = () => {
    screen1.style.display = "none";
    screen2.style.display = "flex";
    let i = 5;
    timer.innerHTML = 5;
    nextquestion()
    // showoptions()
    showcheckbox()

     let x=setInterval(() => {
        if((qustionCounter==4) && (i==0)){
            clearInterval(x)
            alert("score")
            screen3.style.display="flex"
            screen2.style.display="none"
        }
        if (i === 0) {
            i = 5
            timer.innerHTML = 5;
            qustionCounter++
            optionCounter++
            nextquestion()
            // showoptions()
            showcheckbox()

        }
        else {
            timer.innerHTML = --i;
        }
    }, 100)
}

function nextquestion(){
    question.innerHTML=data[qustionCounter].question;
}

// function showoptions(){
//     option.innerHTML=data[optionCounter].Options;
// } 

function showcheckbox(){
    document.querySelector('#screen2 .options').innerHTML = ''
    for(let j=1; j<=4; j++){
    const checkbox=document.createElement('input');
    checkbox.setAttribute('type','radio');
    checkbox.setAttribute('name','option');

    const span = document.createElement("span")
    span.innerHTML =  data[qustionCounter].Options[j-1]
    document.querySelector('#screen2 .options').append(checkbox);
    document.querySelector('#screen2 .options').append(span);
    }
}