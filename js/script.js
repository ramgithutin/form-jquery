$(document).ready(function() {
    $('#form').submit(function(e) {
        e.preventDefault();
        var firstName = $('#fname').val();
        var lastName = $('#lname').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var msex = $('#rd1');
        var fsex = $('#rd2');
        var number = $('#num').val();
        var address = $('#address').val();
        $(".error").remove();

        if (firstName.length < 1) {
            $('#fname').after('<span class="error">This field is required</span>');
        }
        if (lastName.length < 1) {
            $('#lname').after('<span class="error">This field is required</span>');
        }
        if (email.length < 1) {
            $('#email').after('<span class="error">This field is required</span>');
        } else {
            var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[s0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var validEmail = regEx.test(email);
            if (!validEmail) {
                $('#email').after('<span class="error">Enter a valid email</span>');
            }
        }
        if (number.length < 1) {
            $('#num').after('<span class="error">Enter a valid number</span>');
        } else if (number.length > 10 || number.length < 10) {
            $('#num').after('<span class="error">Invalid number</span>');
        }
        if (address.length < 1) {
            $('#address').after('<span class="error">this field is required</span>');
        }
        if (password.length < 8) {
            $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
        }
        if (msex.checked == true || fsex.check == true) {
            console.log("sss")
        } else {
            $('#gender').after('<span class="error">This field is required</span>');
        }

    });

});