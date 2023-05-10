(function(){
    
    const scrollText = document.querySelector('.hero_title');
    scrollText.addEventListener('mousemove', ()=>{changeOpacity()});
    const textOpacity = document.querySelector('.sticker_more');
    function changeOpacity(add){
        for(i=0;i<1;i++){
        textOpacity.classList.add('--more')
        }

        
        
    }
})();