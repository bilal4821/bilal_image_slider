let slideimages= document.getElementsByClassName('slider_image');


let next= document.querySelector('.next');


let prev= document.querySelector('.prev');


let dots= document.querySelectorAll('.dot');

var counter=0;


next.addEventListener('click', slidenext);

function slidenext(){
    slideimages[counter].style.animation= 'next1 0.4s ease-in forwards';
    console.log(dots.length)
    console.log("bilal")
 
    if(counter>= slideimages.length-1){
        counter=0;
    }
    else{
        counter++;
    }
    slideimages[counter].style.animation= 'next2 0.4s ease-in forwards';
    indicators();
}





prev.addEventListener('click', slideprev);

function slideprev(){
    slideimages[counter].style.animation= 'prev1 0.4s ease-in forwards';
    if(counter==0){
        counter=slideimages.length-1;;
    }
    else{
        counter--;
    }
    slideimages[counter].style.animation= 'prev2 0.4s ease-in forwards';
    indicators();
}




function autoSlide(){
    deletinterval= setInterval(timer, 2000);
    function timer(){
        slidenext();
        indicators();

    }

}

autoSlide();


const container= document.querySelector('.slide-container');

container.addEventListener('mouseover',function(){
    clearInterval(deletinterval);
});


container.addEventListener('mouseout',autoSlide);




function indicators(){
    
    for(i=0; i<dots.length; i++) {
        dots[i].className= dots[i].className.replace(' active', '');
    }
    dots[counter].className+= ' active';
}



function switchimage(currentImage){
    currentImage.classList.add('active');

    
    var imageid= currentImage.getAttribute('attr');
    console.log(imageid)
    console.log("bilal")
    if (imageid > counter) {
        slideimages[counter].style.animation= 'next1 0.4s ease-in forwards';
        counter= imageid;
        slideimages[counter].style.animation= 'next2 0.4s ease-in forwards';
    }
    else if(imageid== counter){
        return;

    }
    else{
        slideimages[counter].style.animation= 'prev1 0.4s ease-in forwards';
        counter= imageid;
        slideimages[counter].style.animation= 'prev2 0.4s ease-in forwards';

    }
    indicators();


}