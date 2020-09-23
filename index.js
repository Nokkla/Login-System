$(document).ready(function() {

    $('#submit').click(function() {

        event.preventDefault();

       //Validate Login Details
       var ValidEmail = $('#username').val() === 'jonsnow';
       var ValidPassword = $('#password').val() === 'wins'; 

        if (ValidEmail === true && ValidPassword === true) { 
            $('.valid').css('display', 'block');
        }
        else {
            //Error Message is Displayed
            $('.error').css('display', 'block'); 
        }
    });
});