$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault(); 
    
        let inputnew= $('#new-item').val(); 
        let outputnew = $('<li id="lista"></li>'); 
        $(`<p>${inputnew}</p>`).appendTo(outputnew); 
        $(outputnew).appendTo('ul')
        
    })
})

    $("ul").on('click', 'li' , function(){
    
        if ($(this).hasClass("aux")){
        $(this).removeClass("aux");
        } else {
        $(this).addClass("aux");
        }
    }) 