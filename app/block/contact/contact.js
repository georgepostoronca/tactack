$("input,textarea").focus(function() {
    $(this).parent().addClass("focus");
});

$("input,textarea").blur(function() {
    if(!$(this).val()) {
        $(this).parent().removeClass("focus");
    }
});


$.validator.setDefaults({
    debug: false,
    rules: {
        mail: {
            required: true,
            email: true,
        }
    },
    errorPlacement: function (error, element) {
        $(this).removeClass("valid");
        $(this).addClass("error");
    },
    success: function (label, element) {
        $(this).removeClass("error");
        $(this).addClass("valid");
    },
});

$("form").each(function() {
    $(this).validate({
        submitHandler: function (form) {
			console.log("Submit");
		}
    });
});