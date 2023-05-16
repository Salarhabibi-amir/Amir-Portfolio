function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";

}
let portfoliobtn = document.querySelector('.close-overlap1');
let aboutbtn = document.querySelector('.close-overlap2');
let contactbtn = document.querySelector('.close-overlap3');

portfoliobtn.addEventListener('click', function() {
    document.getElementById("myNav").style.height = "0%";
})
aboutbtn.addEventListener('click', function() {
    document.getElementById("myNav").style.height = "0%";
})

contactbtn.addEventListener('click', function() {
    document.getElementById("myNav").style.height = "0%";
})