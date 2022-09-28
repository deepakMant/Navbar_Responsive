window.addEventListener('resize', function() {
    addReqireClass();
});


function addReqireClass (){
    if (window.innerWidth <860 ) {
        document.body.classList.add('mobile')
    }
    else {
        document.body.classList.remove('mobile');
    }
}


window.onload = addReqireClass



let hamburger = document.querySelector('.hamburger');
let mobilenav = document.querySelector('.nav-list');

let bars = document.querySelectorAll('.hamburger span');

let isactive = false



hamburger.addEventListener('click', function() {
    mobilenav.classList.toggle('open')

    if(!isactive) {

        bars[0].style.transform = 'rotate(45deg)'
        bars[1].style.opacity ="0"
        bars[2].style.transform = 'rotate(-45deg)'
        isactive = true
    } else {
        bars[0].style.transform = 'rotate(0deg)'
        bars[1].style.opacity ="1"
        bars[2].style.transform = 'rotate(0deg)'
        isactive = false;
    }
})