(function logoAnim(){
    var logo = document.getElementById('logo'),
        logoMsg = document.getElementById('message'),
        logoText = '< david.ashton />',
        logoLength = logoText.length,
        logoCurrText = '',
        interval = 100,
        charPos = 0,
        timer
    ;
    
    function updateText(){
        var char = logoText.charAt(charPos);
        if(char === '<' || char === '/' || char === '>'){
            char = "<span class='logo__tag'>"+char+"</span>"
        }
        logoCurrText = logoCurrText + char;
        logo.innerHTML = logoCurrText;
        charPos++;
        if(charPos === logoLength){
            window.clearInterval(timer);
            
            setTimeout(function(){
                logoMsg.className='';
            },1000);
            setTimeout(function(){
                logoMsg.className='is--hidden'
                logo.className='is--hidden'
            },8000);
            setTimeout(function(){ 
                logo.className='';
                logo.innerHTML='';
                charPos=0;
                logoCurrText='';
                timer = window.setInterval(updateText,interval); 
            }, 10000);
        }
    }
    
    timer = window.setInterval(updateText,interval); 
})();