
const apply = document.getElementById('apply');
const discard = document.getElementById('discard');
const keep = document.getElementById('keep');
const modal = document.querySelector('.tr-modal');
const mclose = document.querySelector('.tr-modal .close');
const aclose = document.querySelector('.abu-custom .custom-btn');
const abuclose = document.querySelector('.abu-custom');

apply.addEventListener('click', function(){

    modal.classList.add('active');

});

mclose.addEventListener('click', function(){

    abuclose.style.display = 'flex';


});

aclose.addEventListener('click', function(){

    abuclose.style.display = 'none';


});
keep.addEventListener('click', function(){

    abuclose.style.display = 'none';


});

discard.addEventListener('click', function(){

    abuclose.style.display = 'none';
    modal.classList.remove('active');


});

modal.addEventListener('click', function(e){

    if(e.target == this){
        modal.classList.remove('active');
    }
    


});