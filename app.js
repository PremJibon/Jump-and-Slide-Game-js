var game = document.querySelector(".game"),
    ch = document.querySelector(".ch"),
    chleft = parseInt(window.getComputedStyle(ch).getPropertyValue("left")),
    chBottom = parseInt(window.getComputedStyle(ch).getPropertyValue("bottom")),
    chWidth = parseInt(window.getComputedStyle(ch).getPropertyValue("width")),
    chHeight = parseInt(window.getComputedStyle(ch).getPropertyValue("height"));

var downTime;
var leftTime ;
var upTIme;
var jumping = false;
var isGoingLeft = false;
var isGoingRight = false;
var rightTime
var winWidth = parseInt(window.innerWidth)

function jump() {
    ch.style.width= chWidth + 'px'
    ch.style.height = chHeight + "px"
    if(jumping) return
    upTIme = setInterval(function () {
        if (chBottom > 250) {
            clearInterval(upTIme)
            downTime = setInterval(function () {
                if(chBottom <0){
                    clearInterval(downTime)
                    jumping = false
                }
                chBottom -= 5
                ch.style.bottom = chBottom + "px";
            },20)
        }
        jumping= true
        chBottom += 30
        ch.style.bottom = chBottom + "px";
    }, 20);
}

function moveLeft(){
    ch.style.width= chHeight + 'px'
    ch.style.height = chWidth + "px"
    if(isGoingRight){
        clearInterval(rightTime)
        isGoingRight=false
    }
    isGoingLeft = true
    leftTime = setInterval(function(){
        if(chleft <0){
            clearInterval(leftTime)
        }
        chleft -=5
        ch.style.left = chleft + "px"
    },20)
}
function moveRight(){
    ch.style.width= chHeight + 'px'
    ch.style.height = chWidth + "px"
    if(isGoingLeft){
        clearInterval(leftTime)
        isGoingLeft =false
    }
    isGoingRight  = true
    rightTime = setInterval(function(){
        if(chleft > (winWidth-100)){
            clearInterval(rightTime)
        }
        chleft +=5
        ch.style.left = chleft + "px"
    },20)
}
function control(e) {
    if (e.key == "ArrowUp") {
        jump()
    }
    if( e.key == "ArrowLeft"){
        moveLeft()
    }
    if(e.key == "ArrowRight"){
        moveRight()
    }
}
document.addEventListener("keydown", control)