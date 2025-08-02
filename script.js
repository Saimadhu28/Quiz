let heading = document.querySelector(".heading");
let p = "Test your knowledge with our quiz!";
let i=0;
function type(){
    if(i<p.length){
        heading.textContent += p.charAt(i);
        i++;
        setTimeout(type,80);
    }
}
type();

let start = document.querySelector(".start");
let container = document.querySelector(".container");
let main = document.querySelector(".questions");
let questions  =document.querySelectorAll(".question");
let next = document.querySelector(".next");
let marks= document.querySelector(".value");
let display = document.querySelector(".contain");
let user = prompt("Enter Your Name: ");
let name =document.querySelector(".name");
let score= 0 ;
let currentquestion = 0;
start.addEventListener("click",()=>{
    start.classList.add("hide");
    container.classList.add("hide");
    main.classList.remove("hide");
    showquestion(currentquestion);
})

const showquestion = (index)=>{
    for(let i=0;i<questions.length;i++){
        questions[i].classList.add("hide");
        if(i==index){
            questions[i].classList.remove("hide");
        }
    }
}
questions.forEach((question)=>{
    let options = question.querySelectorAll(".options p");
    options.forEach((opt)=>{
        opt.addEventListener("click",()=>{
            if(opt.id==="Ans" && !opt.classList.contains("Answered")){
                score++;
            }
            opt.classList.add("Answered");
            opt.style.border = "3px solid blue";
        })
    })
})
next.addEventListener("click",()=>{
    if(currentquestion<questions.length-1){
        currentquestion++;
        showquestion(currentquestion);
    }else{
        disable();
        name.innerText=user;
        marks.innerText  =score;
        display.classList.remove("hide");
    }
})
const disable = ()=>{
     main.classList.add("hide");
}



