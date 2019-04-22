$(document).ready(function(){

    $("#openClosePre2").hide();

    $("input:radio[name='pre2']").change(function(){  

            if(this.value == 'no' && this.checked){
              $("#openClose").show();
              $("#openClosePre2").hide();
            }else{
              
            }

            if(this.value == 'yes' && this.checked){
                $("#openClosePre2").show();
                $("#openClose").hide();
              }else{
                $("#openClose").show();  
              }

    });

});