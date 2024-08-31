let userseq=[];
let gameseq=[];
let btns=['yellow','red','purple','blue'];
let started=false;
let level=0;
let btn=document.querySelector('button');
let h2=document.querySelector('h2');
let highscore=0;

document.addEventListener('keypress',function(){
    if(started==false){
        started=true;
        console.log("Game Started");
        levelup();
    }
    
});

function levelup(btn){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let rndm=Math.floor(Math.random() * 3);
    let rndms=btns[rndm];
    let randomclr=document.querySelector(`.${rndms}`);
    gameseq.push(rndms)
    btnflash(randomclr);
}
function btnflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },250);
    
} 
function checkans(index){
    
    if(userseq[index]==gameseq[index]){
        if(userseq.length == gameseq.length){
        setTimeout(levelup,600);
        }
    }
    else{
        if(level-1>highscore){
            highscore=level-1;
        }
        h2.innerHTML=`Game Over! Your Score was <b>${level-1}</b> <br> Highest Score is <b>${highscore} </b> <br>Press any key to start,`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnpress(){
    let btn=this;
    btnflash(btn);
    userseq.push(btn.getAttribute("id"));
    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".box");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}



