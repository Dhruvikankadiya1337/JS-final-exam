const btn = document.getElementById("button");

$(document).ready(){
    $("btn").click (function (){
        toadd =$('input[name = listitem]').val().trim

        if(toadd !== listitem){
            let currentDatetime = new Date ().toLocaleDateString();

            let listitem = '<li>' + '<input type="radio" class="task-radio">' +
            '<span class="task-text">(' + currentDatetime +') </span>
            
            $('ol').prepend(listitem);
            $('input[name=listitem').val('');


        }
    });

}

