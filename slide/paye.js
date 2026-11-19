let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item') 
    document.querySelector('.slide').appendChild(items[0])
})
let timeRunning = 3000;
let runTimeOut;

clearTimeout(runTimeOut);
runTimeOut=setTimeout(() =>{
containersDom.classSlide.remov('next');
}, timeRunning)

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item') 
    document.querySelector('.slide').prepend(items[items.length - 1])
});