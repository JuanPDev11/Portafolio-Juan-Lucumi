(function(){
    
    const theme = document.querySelector('.light_cbg');
    const themeDark = document.querySelector('#button_theme');
    const buttonFront = document.querySelector('.button-front');
    
    function changeTheme(add){
        theme.classList.toggle('light_cbg--show');
        themeDark.classList.toggle('dark');
    }
    //buttonLight.addEventListener('click', ()=>{changeTheme(1)});
    window.addEventListener('scroll', ()=>{buttomOpacity()});
    themeDark.addEventListener('click', ()=>{changeTheme()});
    buttonFront.addEventListener('click', ()=>{changeFront()});
    
    

    function buttomOpacity(){
        let posision = document.documentElement.scrollTop;

        
        
        
        if(posision <= 100){
            themeDark.classList.add('--opmenu');
        }
        if(posision > 100){
            themeDark.classList.remove('--opmenu');
        }
    }

    function changeFront(){
        let posision = document.documentElement.scrollTop;
        if (posision > 0 ) {
            window.scrollTo(0,0);
        }
        
    }
})();