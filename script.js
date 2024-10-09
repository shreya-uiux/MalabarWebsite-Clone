const left = document.querySelector('.lhs');
const right = document.querySelector('.rhs');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image')

let slideNo = 1;
const length = images.length;

// for dots

const bottom = document.querySelector('.bottom');

for(let i=0; i<length; i++){
    const div = document.createElement('div');
    div.className = 'button';
    bottom.appendChild(div);
};

const buttons = document.querySelectorAll('.button');

buttons[0].style.backgroundColor = '#9a0056';

const resetBg = ()=>{
    buttons.forEach((button) =>{
        button.style.backgroundColor = '#d3d3d3';
        button.addEventListener('mouseover',stopSlideshow);
        button.addEventListener('mouseout',startSlideshow);
    });
};

buttons.forEach((button, i) =>{
    button.addEventListener('click', ()=>{
        resetBg();
        slider.style.transform = `translateX(-${i*100}%)`;
        slideNo = i + 1;
        button.style.backgroundColor = '#9a0056';
    });
});

const changeColor = () =>{
    resetBg();
    buttons[slideNo-1].style.backgroundColor = '#9a0056';
};

// end dots


const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNo*100}%)`;
    slideNo++;
};

const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNo-2)*100}%)`;
    slideNo--;
};

const getFirstSlide = ()=>{
    slider.style.transform = `translateX(0)`;
    slideNo = 1;
};

const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1)*100}%)`;
    slideNo = length;
};

right.addEventListener('click', ()=>{
    slideNo < length ? nextSlide() : getFirstSlide();  
    changeColor();
});

left.addEventListener('click', ()=>{
    slideNo > 1 ? prevSlide() : getLastSlide();  
    changeColor();
});

//autoplay slides

let slideInterval;

const startSlideshow = () =>{
    slideInterval = setInterval(()=>{
        slideNo < length ? nextSlide() : getFirstSlide();  
        changeColor();
    },6000);
};

const stopSlideshow = () =>{
    clearInterval(slideInterval);
};

startSlideshow();

slider.addEventListener('mouseover',stopSlideshow);
slider.addEventListener('mouseout',startSlideshow);
right.addEventListener('mouseover',stopSlideshow);
right.addEventListener('mouseout',startSlideshow);
left.addEventListener('mouseover',stopSlideshow);
left.addEventListener('mouseout',startSlideshow);

const toggle1 = document.querySelector(".toggleB1");
const toggle2 = document.querySelector(".toggleB2");
const toggle3 = document.querySelector(".toggleB3");
const toggleI = document.querySelector(".toggle-imgs");
const toggleI1 = document.querySelector(".toggle-imgs1");
const toggleI2 = document.querySelector(".toggle-imgs2");

toggle2.addEventListener("click", ()=>{
    toggleI.style.display='none';
    toggleI2.style.display='none';
    toggleI1.style.display='block';
    toggle2.style.color='rgb(200, 14, 45)';
    toggle1.style.color='rgb(100, 100, 100)';
    toggle3.style.color='rgb(100, 100, 100)';
});

toggle3.addEventListener("click", ()=>{
    toggleI.style.display='none';
    toggleI1.style.display='none';
    toggleI2.style.display='block';
    toggle3.style.color="rgb(200, 14, 45)";
    toggle2.style.color='rgb(100, 100, 100)'; 
    toggle1.style.color='rgb(100, 100, 100)';
});

toggle1.addEventListener("click", ()=>{
    toggleI.style.display='block';
    toggleI2.style.display='none';
    toggleI1.style.display='none';
    toggle1.style.color='rgb(200, 14, 45)';
    toggle2.style.color='rgb(100, 100, 100)';
    toggle3.style.color='rgb(100, 100, 100)';
});