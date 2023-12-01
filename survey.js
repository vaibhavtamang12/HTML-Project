////action

$(function(){
                
    function isEmail(email)
    {var pattern = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
    return pattern.test(email);}
                
    $('#buton').click(function(){
                    
    var errormessage="";
    $("#error").html("");                 
        
    if($('#firstname').val()==''){
    errormessage +='<p>Please enter your name</p>'
    }

    if($('#lastname').val()==''){
    errormessage +='<p>Please enter your last name</p>'
    }
                          
    if(errormessage!=""){
    $("#error").html(errormessage);
    }
                            
    });
            
});
    
            
        
