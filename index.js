(function(){

    let screen=document.querySelector(".screen");
    let buttons=document.querySelectorAll('.btn');
    let clear=document.querySelector(".btn-clear");
    let equal=document.querySelector(".btn-equal");
    
    buttons.forEach(function(button){
        
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            if(value=="+" || value=="-" ||value=="/" ||value=="*" ){
                if(screen.value=="") screen.value="";
                else screen.value +=value;
            }
            else screen.value +=value;
        })
    });

    equal.addEventListener('click',(e)=>{

        if(screen.value==""){
            screen.value="";
        }else{
            let answer=eval(screen.value);
            if(!Number.isInteger(answer)) screen.value=answer.toFixed(2);
            else screen.value=answer;
            
        }

    });

    clear.addEventListener('click',(e)=>{
        screen.value="";
    });

})();