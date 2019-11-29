jQuery(document).ready(function($){
    $('#prepend-btn').on('click', function(){
        var entered_text = $('#text-entered-field').val();
        if(! entered_text)
        {alert('Please enter text');return;}
        else 
        {$("#text-entered-field").prepend(document.getElementById("tasks").innerHTML = entered_text);}
    });
});
