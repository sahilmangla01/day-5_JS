
let h1 = document.querySelector(".question1")

function question1(){
    h1.style.display = "inline-block"
    h1.innerHTML = "MERN STACK"
}
h1.addEventListener('click',()=>{
    h1.style.display = "none"
})

function clock(){
    let time = new Date();
    let hr = time.getHours();
    let mm = time.getMinutes();
    let ss  = time.getSeconds();

    hr = hr < 10 ? "0" + hr : hr;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    let timeFormat = `${hr} Hours : ${mm} Minutes : ${ss} Seconds`
    document.querySelector(".question3").innerHTML = `${timeFormat}`
}
setInterval(clock , 1000);
clock();


let q4 = document.querySelector(".question4");
 let doReplace = true;
function replace(){
    if(doReplace){
        q4.innerHTML = "Welcome to Elevation academy"
        doReplace = false;
    }else{
        q4.innerHTML = "Hello World"
        doReplace = true;
    }
    
}

let q5 = document.querySelector(".question5");

 let doHide = true;
function hide(){
    if(doHide){
        q5.style.display = "none"
        document.querySelector(".btn5").innerHTML = "Show"
        doHide = false;
    }else{
        q5.style.display = "inline-block"
        document.querySelector(".btn5").innerHTML = "Hide"
        doHide = true;
    }
    
}


