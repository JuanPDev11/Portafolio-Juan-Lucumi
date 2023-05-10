(function(){
const menuOpacity = document.querySelector('.buttons-event'); 
const navbar = document.querySelector('.nav_items') ;
const menuClose = document.querySelector('.buttons-close'); 

  
    
menuOpacity.addEventListener('click', ()=>{changeOpacityMenu()});
menuClose.addEventListener('click', ()=>{changeOpacity()});

    
    function changeOpacityMenu(){
        
        navbar.classList.toggle('--opnavbar');
        menuOpacity.classList.toggle('menu-op');
        menuClose.classList.toggle('close-op');

        
    }
    function changeOpacity(){
        
        navbar.classList.toggle('--opnavbar');
        menuOpacity.classList.toggle('menu-op');
        menuClose.classList.toggle('close-op');

        
    }

   

})();