const category=document.querySelectorAll(".click>p"),
    ON_CN="on",
    OFF_CN="off";

const topBtn=document.querySelector(".topBtn");

function clicked(){
    for(i=0; i<category.length; i++){
        const categoryEach=category[i];
        const showingItem=categoryEach.parentElement,
        more=showingItem.parentElement.firstElementChild;
        

        

        function showClick(){
            more.classList.toggle(ON_CN);
            showingItem.classList.toggle(ON_CN);
            console.log(more);
        }

        categoryEach.addEventListener('click',showClick);

        /* ay.addEventListener('click',function(){
            showingItem.classList.remove("showing");
            console.log(showingItem);
        }); */

    };
};

function goingTop(){
    window.scrollTo(0,0);
};

function toTheTopClick(){
    topBtn.addEventListener('click',goingTop);
};

clicked();
toTheTopClick();
