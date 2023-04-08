document.getElementById('nav', function(){
    var navbar = document.querySelector('navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0)
})