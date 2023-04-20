const score=document.querySelector(".score span");
const holes=document.querySelectorAll(".hole");
const play= document.querySelector(".buttons .play");
const stop=document.querySelector(".buttons .pause");
const cursor= document.querySelector(".cursor img");

// 
window.addEventListener("mousemove",(e)=>{
    // console.log(e);/
    cursor.style.top=e.pageY+"px";
    cursor.style.left=e.pageX+"px";


window.addEventListener("click",()=>{
    cursor.style.animation="hit 0.1s ease";
    setTimeout(()=>{
        cursor.style.removeProperty("animation");
    },100);
});
});

// function to add play
play.addEventListener("click",()=>{
    play.style.display="none";
    stop.style.display="inline-block";

    // start the game
   let hole;
    let points=0;
    const startGame=setInterval(()=>{
        // select random hole
        // will go indefinately
     
      
       let arrayNo = Math.floor(Math.random() *9);
       hole=holes[arrayNo];
  
    //    console.log(hole);
    //    to create elements
    //    we will give it source
    //  to insert the image created to random div 

    let image =document.createElement("img");
    image.setAttribute("src", "./mole.png");
    image.setAttribute("class" ,"mole");
     hole.appendChild(image);

   setTimeout(()=>{
    hole.removeChild(image);
        // we dont want any moles to appear twice
   },600);
    },700);
    // if condition is matched just keep incrementing

    window.addEventListener("click",(e)=>{
        if(e.target==hole)score.innerText=++points;
    });

      // to stop we have to click the stop button
      stop.addEventListener("click",()=>{
        clearInterval(startGame);
        // need to re display play after stop
        stop.style.display="none";
         play.style.display="inline-block";
        //  once pause button is displayed  make the score to zero 
         score.innerText=0;
      });
});