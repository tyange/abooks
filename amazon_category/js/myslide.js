const SHOWING_CLASS="showing",
    firstSlide=document.querySelector(".item1"),
    secondSlide=document.querySelector(".item2"),
    thirdSlide=document.querySelector(".item3"),
    leftAngle=document.querySelector(".btn-left"),
    rightAngle=document.querySelector(".btn-right");
    
    function slide(){
     const  currentSlide=document.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide){
        currentSlide.classList.remove(SHOWING_CLASS);
        let nextSlide=currentSlide.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add(SHOWING_CLASS);
        } else{
            firstSlide.classList.add(SHOWING_CLASS);
        }
    } else{
        firstSlide.classList.add(SHOWING_CLASS);
    }
};

function prevSliding(){
    const  currentSlide=document.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide==secondSlide || currentSlide==thirdSlide){
    
    currentSlide.classList.remove(SHOWING_CLASS);
    let prevSlide=currentSlide.previousElementSibling;
    prevSlide.classList.add(SHOWING_CLASS);
    } else{
        currentSlide.classList.remove(SHOWING_CLASS);
        thirdSlide.classList.add(SHOWING_CLASS);
    }
}

function nextSliding(){
    const currentSlide=document.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide==firstSlide || currentSlide==secondSlide){
        currentSlide.classList.remove(SHOWING_CLASS);
        let nextSlide=currentSlide.nextElementSibling;
        nextSlide.classList.add(SHOWING_CLASS);
        
    }else{
        currentSlide.classList.remove(SHOWING_CLASS);
        firstSlide.classList.add(SHOWING_CLASS);
    }
}

function leftBtn(){
    leftAngle.addEventListener('click',prevSliding);
}
function rightBtn(){
    rightAngle.addEventListener('click',nextSliding);
}
    
    slide();
    setInterval(slide, 4000);
    leftBtn();
    rightBtn();